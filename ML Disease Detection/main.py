import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import os
import shutil
from sklearn.model_selection import train_test_split

# Define the path to your dataset
dataset_dir = 'D:/Microsoft Visual/ML Disease Detection/PlantVillage_resize_224'

# Create train and test directories
train_dir = os.path.join(dataset_dir, 'train')
test_dir = os.path.join(dataset_dir, 'test')

if not os.path.exists(train_dir):
    os.makedirs(train_dir)

if not os.path.exists(test_dir):
    os.makedirs(test_dir)

# Iterate through subfolders s1, s2, ..., s10
for category in [f's{i}' for i in range(1, 39)]:
    category_path = os.path.join(dataset_dir, category)
    
    # Skip if it's not a directory
    if not os.path.isdir(category_path):
        print(f"Skipping {category_path} as it is not a directory.")
        continue

    # List all files with common image extensions
    images = [f for f in os.listdir(category_path) if f.endswith(('.jpg', '.jpeg', '.png'))]

    print(f"Found {len(images)} images in category: {category}")

    if len(images) == 0:
        print(f"No images found in {category_path}. Skipping...")
        continue

    # Split images into training and testing sets
    train_images, test_images = train_test_split(images, test_size=0.2, random_state=42)

    # Create directories for the category in train and test
    train_category_dir = os.path.join(train_dir, category)
    test_category_dir = os.path.join(test_dir, category)

    if not os.path.exists(train_category_dir):
        os.makedirs(train_category_dir)

    if not os.path.exists(test_category_dir):
        os.makedirs(test_category_dir)

    # Move images to train and test directories
    for image in train_images:
        shutil.move(os.path.join(category_path, image), os.path.join(train_category_dir, image))

    for image in test_images:
        shutil.move(os.path.join(category_path, image), os.path.join(test_category_dir, image))

# Data generators for loading images
train_datagen = ImageDataGenerator(rescale=1.0/255, rotation_range=40, width_shift_range=0.2,
                                   height_shift_range=0.2, shear_range=0.2, zoom_range=0.2, 
                                   horizontal_flip=True, fill_mode='nearest')

test_datagen = ImageDataGenerator(rescale=1.0/255)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(150, 150),
    batch_size=32,
    class_mode='categorical'  # For multi-class classification
)

test_generator = test_datagen.flow_from_directory(
    test_dir,
    target_size=(150, 150),
    batch_size=32,
    class_mode='categorical'  # For multi-class classification
)


# Build a CNN model
model = tf.keras.models.Sequential([
    tf.keras.layers.Input(shape=(150, 150, 3)),  # Use Input layer for the input shape
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(512, activation='relu'),
    tf.keras.layers.Dense(len(train_generator.class_indices), activation='softmax')  # Output layer for multi-class
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // 32,
    epochs=10,
    validation_data=test_generator,
    validation_steps=test_generator.samples // 32
)

# Save the model
model.save('D:/Microsoft Visual/ML Disease Detection/plant_disease_classification_model.h5')

# Evaluate the model
loss, accuracy = model.evaluate(test_generator)
print(f'Test loss: {loss}')
print(f'Test accuracy: {accuracy}')

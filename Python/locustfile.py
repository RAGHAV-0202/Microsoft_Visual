from Python.locustfile import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 2.5)  

    @task
    def get_homepage(self):
        self.client.get("/")

    @task
    def get_products(self):
        self.client.get("/api/products/data/all-products")

    @task
    def get_single_category(self):
        self.client.get("/api/products/data/men")

    @task
    def get_single_product(self):
        self.client.get("/api/products/data/item/regular-fit-printed-resort-shirt-men-2")

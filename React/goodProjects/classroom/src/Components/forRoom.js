import React from "react";
import ReactPlayer from "react-player";

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// MemberBox Component to show user name and video
const MemberBox = ({ name, myStream, style ,isCurrentUser , remoteStream}) => {

  const [mediaStreamPresent, setMediaStreamPresence] = React.useState(false);

  // Check if the media stream is active
  React.useEffect(() => {
    setMediaStreamPresence(myStream && myStream.active);
  }, [myStream]);

  const nameArray = name.split("");
  const bg = { backgroundColor: getRandomColor() };

  return (
    <div style={style} className="UserBox center flex col">
      {!mediaStreamPresent ? (
        <>
          <div style={bg} className="userLogo flex roundedFull center">
            <p>{nameArray[0]}</p>
          </div>
          <p className="userName">{name}</p>
        </>
      ) : (

        <>
            {!isCurrentUser ? (
                    <>
                      {/* <div style={bg} className="userLogo flex roundedFull center">
                          <p>{nameArray[0]}</p>
                      </div>
                      <p className="userName">{name}</p> */}


                      {/* JUST FOR NOW , OTHERWISE DELETE THIS , AND UNCOMMENT THAT */}

                        <ReactPlayer 
                           url={remoteStream} 
                           playing 
                       />
                    </>
                ) : (
                    <ReactPlayer 
                        url={myStream} 
                        playing 
                    />
                )

            }

            
        
        </>
      )}
    </div>
  );
};

const OnlyUserName = ({ name }) => {
  const bg = { backgroundColor: getRandomColor() };
  return (
    <div className="userNameForRight flex row p-2">
      <div style={bg} className="userNameRightLogo flex center">
        {name.charAt(0)}
      </div>
      <p>{name}</p>
    </div>
  );
};

export { OnlyUserName, MemberBox };

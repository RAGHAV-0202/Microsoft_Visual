import React from "react"


const CountDown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date();
        if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    React.useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on unmount
    }, [targetDate]);

    return (
        <h2 className="countDownH2">
            <span> <p> {timeLeft.days}</p> Days </span>
            <span> <p> {timeLeft.hours}</p> Hours </span>
            <span> <p> {timeLeft.minutes}</p> Minutes </span>
            <span> <p> {timeLeft.seconds}</p> Seconds</span>
        </h2>
    );
    };

const Branding = () => {
  const [brandingText, setBrandingText] = React.useState("H4CKP13T");
  const [lgbtText, setLgbtText] = React.useState("0x01");
  const [style , setStyle] = React.useState({"display" : "none"})

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

  
  const shuffleText = (targetText, setText, duration = 2000) => {
    let iteration = 0;
    const interval = 40 // Speed of each shuffle
    const steps = Math.floor(duration / interval);

    const intervalId = setInterval(() => {
      setText(
        targetText
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return targetText[idx]; 
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) clearInterval(intervalId);
      iteration += targetText.length / steps; 
    }, interval);
  };

  React.useEffect(() => {
    shuffleText("H4CKP13T", setBrandingText);
    setTimeout(() => {
        setStyle({"display" : "block"})
        shuffleText("0x01", setLgbtText, 1500); 
    }, 2000);
  }, []);

  return (
    <div className="homepage_page1_branding">
      <h1>{brandingText}</h1>
      <h1 style={style} className="LGBT">{lgbtText}</h1>
    </div>
  );
};

export {CountDown , Branding}
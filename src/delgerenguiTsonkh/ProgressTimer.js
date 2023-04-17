import React, { useEffect, useState } from "react";

const ProgressLineWithAnimation = ({ targetDate }) => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [calculatedProgressValue, setcalculatedProgressValue] = useState(0);

  useEffect(() => {
    const totalProgressValue = 30
    const updateRemainingTime = () => {
      const now = new Date().getTime();
      const targetTime = new Date(targetDate).getTime();
      const timeDifference = targetTime - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); 
      setRemainingDays(days);
      setRemainingHours(hours);
      setRemainingMinutes(minutes);
      setRemainingSeconds(seconds);  

       const currentDate = new Date();
       const remainingTime = targetTime - currentDate.getTime();
       const progressValue = Math.max(0, totalProgressValue - Math.ceil(remainingTime / (1000 * 60 * 60 * 24)));
       const calculatedProgressValue1 = (progressValue / totalProgressValue) * 100;
       setcalculatedProgressValue(calculatedProgressValue1)
    };

    updateRemainingTime(); // Update remaining time initially
    const timer = setInterval(updateRemainingTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
      <div className="relative w-full bg-gray-200 h-7">
        <div
          className="absolute top-0 left-0 h-7 bg-blue-500 transition-width duration-500"
          style={{ width: `${calculatedProgressValue}%` }}
        > 
          <div className="flex items-center w-full">
            {remainingDays > 0 && (
              <div className="flex items-center">
                <div>{remainingDays}</div>
                <div>
                  {remainingDays === 1 ? "өдөр" : "өдөр"}
                </div>
               </div>
            )}
             {remainingHours > 0 && (
              <div className="flex">
                 <div> 
                  {remainingHours} 
                </div>
                <div>
                  {remainingHours === 1 ? "цаг" : "цаг"}
                </div> 
              </div>
            )}
            {remainingMinutes > 0 && (
               <div className="flex">
                  <div> 
                    {remainingMinutes} 
                  </div>
                  <div>
                    {remainingMinutes === 1 ? ":" : ":"}
                  </div> 
                </div> 
            )}
            {remainingSeconds > 0 && ( 
              <div className="flex">
              <div> 
                {remainingSeconds} 
              </div>
              <div>
                {remainingSeconds === 1 ? "" : ""}
              </div> 
            </div> 
            )}
            {remainingDays === 0 && remainingHours === 0 && remainingMinutes === 0 && remainingSeconds === 0 && (
              <div>Closed</div>
            )}
          </div>
        </div>
      </div> 
  );
};

export default ProgressLineWithAnimation;

import { useState, useEffect } from "react";

const MalaJope = () => {
  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Get only the date part
  };

  const [clickCount, setClickCount] = useState(() => {
    const saved = localStorage.getItem("clickCount");
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [roundCount, setRoundCount] = useState(() => {
    const saved = localStorage.getItem("roundCount");
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [reward, setReward] = useState(() => {
    const saved = localStorage.getItem("reward");
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [dailyTarget, setDailyTarget] = useState(() => {
    const saved = localStorage.getItem("dailyTarget");
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [lastResetDate, setLastResetDate] = useState(() => {
    const saved = localStorage.getItem("lastResetDate");
    return saved !== null ? saved : getTodayDateString();
  });
  const [isGoalSet, setIsGoalSet] = useState(() => {
    const saved = localStorage.getItem("isGoalSet");
    return saved !== null ? JSON.parse(saved) : false;
  });
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("streak");
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [lastCompletedDate, setLastCompletedDate] = useState(() => {
    const saved = localStorage.getItem("lastCompletedDate");
    return saved !== null ? saved : "";
  });

  useEffect(() => {
    const today = getTodayDateString();
    if (lastResetDate !== today) {
      handleReset();
      setLastResetDate(today);
      setIsGoalSet(false); // Allow goal setting for the new day
    }

    // Check if the target was completed yesterday
    if (lastCompletedDate === getYesterdayDateString()) {
      if (clickCount >= dailyTarget) {
        setStreak((prevStreak) => prevStreak + 1);
      } else {
        setStreak(0); // Reset streak if target is not completed
      }
    }
  }, [lastResetDate, lastCompletedDate, clickCount, dailyTarget]);

  useEffect(() => {
    localStorage.setItem("clickCount", clickCount);
  }, [clickCount]);

  useEffect(() => {
    localStorage.setItem("roundCount", roundCount);
  }, [roundCount]);

  useEffect(() => {
    localStorage.setItem("reward", reward);
  }, [reward]);

  useEffect(() => {
    localStorage.setItem("dailyTarget", dailyTarget);
  }, [dailyTarget]);

  useEffect(() => {
    localStorage.setItem("lastResetDate", lastResetDate);
  }, [lastResetDate]);

  useEffect(() => {
    localStorage.setItem("isGoalSet", JSON.stringify(isGoalSet));
  }, [isGoalSet]);

  useEffect(() => {
    localStorage.setItem("streak", streak);
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("lastCompletedDate", lastCompletedDate);
  }, [lastCompletedDate]);

  const getYesterdayDateString = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
  };

  const handleClick = () => {
    if (clickCount < 107) {
      setClickCount(clickCount + 1);
    } else {
      setClickCount(0);
      setRoundCount((prevRoundCount) => {
        const newRoundCount = prevRoundCount + 1;
        if (newRoundCount === 16) {
          setReward((prevReward) => prevReward + 1);
          return 0;
        }
        return newRoundCount;
      });

      if (roundCount + 1 === dailyTarget) {
        setReward((prevReward) => prevReward + 1);
        setLastCompletedDate(getTodayDateString()); 
      }
    }
  };

  const handleReset = () => {
    setClickCount(0);
    setRoundCount(0);
    setDailyTarget(0);
    setIsGoalSet(false);

    localStorage.removeItem("clickCount");
    localStorage.removeItem("roundCount");
    localStorage.removeItem("dailyTarget");
    localStorage.removeItem("isGoalSet");

    localStorage.removeItem("lastResetDate");
  };

  const handleTargetChange = (e) => {
    setDailyTarget(parseInt(e.target.value, 10) || 0);
  };

  const handleSetGoal = () => {
    if (dailyTarget > 0) {
      setIsGoalSet(true);
    } else {
      alert("Please set a valid target.");
    }
  };

  return (
    <div className="text-center my-5 bg-yellow-100 py-10 p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl lg:text-3xl font-bold text-purple-700 mb-4">
        হরে কৃষ্ণ হরে কৃষ্ণ কৃষ্ণ কৃষ্ণ হরে হরে হরে রাম হরে রাম রাম রাম হরে হরে
      </h1>
      <button
        className="mt-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
        onClick={handleClick}
      >
        কর
      </button>
      <p className="text-xl mb-2 mt-5">কর: {clickCount}</p>
      <p className="text-xl mb-2">জপ করেছেন: {roundCount}</p>
      <p className="text-xl mb-2">আজকের লক্ষ্য: {dailyTarget}</p>
      <p className="text-xl mb-2">ঊপহার: {reward}</p>
      <p className="text-xl mb-2">
        একটানা প্রতিদিন জপ করেছেন (স্ট্রীক): {streak}
      </p>
      {!isGoalSet && (
        <>
          <input
            type="number"
            className="mt-2 px-4 py-2 border rounded-lg shadow-md"
            value={dailyTarget}
            onChange={handleTargetChange}
            placeholder="আজকের লক্ষ্য"
          />
          <button
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            onClick={handleSetGoal}
          >
            আজকের লক্ষ্য
          </button>
        </>
      )}
      <button
        className="mt-4 ml-2 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
        onClick={handleReset}
      >
        পুনরায় শুরু করুন
      </button>
    </div>
  );
};

export default MalaJope;

const registeredUsers = {
  2026: [
    {
      firstName: "Vicks",
      lastName: "Vaporub",
      gender: "Female",
    },
    {
      firstName: "Robi",
      lastName: "Tussin",
      gender: "",
    },
  ],
};

/*=============================Explanation================================
    Fallback with ||
    || falls back to the right side if the left side is any falsy value —
    it doesn't matter which kind of falsy, they're all treated the same.
//======================================================================*/

const displayRegisteredUsers = (users) => {
  for (const user of users) {
    const firstName = user.firstName || "Empty Data";
    const lastName = user.lastName || "Empty Data";
    const gender = user.gender || "Prefer not to say";

    console.log(
      `First Name: ${firstName} | Last Name: ${lastName} | Gender: ${gender}`,
    );
  }
};

displayRegisteredUsers(registeredUsers[2026]);

/*=============================Explanation================================
    Fallback with ??
    ?? falls back to the right side only if the left side is null or undefined. 
    It does not care whether something looks "empty," "zero," or "falsy" in general, 
    those are irrelevant to ??.
//=====================================================================*/

const gameScores = {
  hawks: {
    score: 0,
  },
  sharks: {
    score: null,
  },
};

const displayScore = (teamName) => {
  const lowerCaseTeamName = teamName.toLowerCase();
  const team = gameScores[lowerCaseTeamName];
  if (!team) {
    console.log("Team not found");
    return;
  }
  // both error for using || and ?? for sharks team score due to null also being a falsy value
  // hawks displays value of 0 with ?? due to the fallback ?? only gets triggered with null or undefined
  console.log(
    `[||] Team: ${lowerCaseTeamName} | Score: ${team.score || "error"}`,
  );
  console.log(
    `[??] Team: ${lowerCaseTeamName} | Score: ${team.score ?? "error"}`,
  );
  return;
};

displayScore("hawks");
displayScore("sharks");

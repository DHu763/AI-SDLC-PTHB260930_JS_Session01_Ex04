function isValidScore(score) {
  return typeof score === "number" && score >= 0 && score <= 10;
}

function getValidScores(scores) {
  const validScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (isValidScore(scores[i])) validScores.push(scores[i]);
  }
  return validScores;
}

function averageScore(scores) {
  const validScores = getValidScores(scores);
  
  if (validScores.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < validScores.length; i++) {
    sum += validScores[i];
  }

  const average = sum / validScores.length;
  return Math.round(average * 100) / 100;
}
function topScores(scores, n) {
  if (typeof n !== "number" || n <= 0) return [];

  const validScores = getValidScores(scores);

  validScores.sort(function (a, b) {
    return b - a;
  });
  return validScores.slice(0, n);
}

function rankNames(names, scores) {
  const validIndices = [];
  const limit = Math.min(names.length, scores.length);
  for (let i = 0; i < limit; i++) {
    if (isValidScore(scores[i])) validIndices.push(i);
  }
  validIndices.sort(function (indexA, indexB) {
    if (scores[indexB] !== scores[indexA]) return scores[indexB] - scores[indexA];
    return indexA - indexB;
  });

  const rankedNames = [];
  for (let i = 0; i < validIndices.length; i++) {
    rankedNames.push(names[validIndices[i]]);
  }

  return rankedNames;
}

function countByGrade(scores) {
  const validScores = getValidScores(scores);
  const gradeCounts = [0, 0, 0, 0];

  for (let i = 0; i < validScores.length; i++) {
    const score = validScores[i];
    if (score >= 8) gradeCounts[0]++;
    else if (score >= 6.5) gradeCounts[1]++;
    else if (score >= 5) gradeCounts[2]++;
    else gradeCounts[3]++;
  }
  return gradeCounts;
}
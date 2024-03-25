export {};

declare global {
  interface ScoreboardGames {
    focusedDate: string;
    focusedDateCount: string;
    gamesByDate: GamesByDate[];
  }

  interface GamesByDate {
    date: string;
    games: Game[];
  }

  interface Name {
    default: string;
    fr: string;
  }

  interface Team {
    abbrev: string;
    id: number;
    logo: string;
    name: Name;
    score?: number;
  }

  interface Period {
    number: number;
    periodType: string; // Create const
  }

  interface Broadcasts {
    countryCode: string;
    id: number;
    market: string;
    network: string;
    sequenceNumber: number;
  }

  interface Venue {
    default: string;
  }

  interface PlaceName {
    default: string;
  }

  interface TeamAbbrev {
    default: string;
  }

  interface TeamCommonName {
    default: string;
  }

  interface Clock {
    inIntermission: boolean;
    running: boolean;
    secondsRemaining: number;
    timeRemaining: string;
  }

  interface Game {
    awayTeam: Team;
    clock: Clock;
    easternUTCOffset: string;
    gameCenterLink: string;
    gameDate: string;
    gameScheduleState: string;
    gameState: string;
    gameType: number;
    homeTeam: Team;
    id: number;
    period: number;
    periodDescriptor: Period;
    season: number;
    startTimeUTC: string;
    threeMinRecap: string;
    ticketsLink: string;
    tvBroadcasts: Broadcasts[];
    venue: Venue;
    venueUTCOffset: string;
  }

  // TEAM TYPES
  interface FullTeam {
    conferenceAbbrev: string;
    conferenceHomeSequence: number;
    conferenceName: string;
    conferenceRoadSequence: number;
    conferenceSequence: number;
    date: string;
    divisionAbbrev: string;
    divisionHomeSequence: number;
    divisionL10Sequence: number;
    divisionName: string;
    divisionRoadSequence: number;
    gameTypeId: number;
    gamesPlayed: number;
    goalAgainst: number;
    goalDifferential: number;
    goalDifferentialPctg: number;
    goalFor: number;
    goalsForPctg: number;
    homeGamesPlayed: number;
    homeGoalDifferential: number;
    homeGoalsAgainst: number;
    homeGoalsFor: number;
    homeLosses: number;
    homeOtLosses: number;
    homePoints: number;
    homeRegulationPlusOtWins: number;
    homeRegulationWins: number;
    homeTies: number;
    homeWins: number;
    l10GamesPlayed: number;
    l10GoalDifferential: number;
    l10GoalsAgainst: number;
    l10GoalsFor: number;
    l10Losses: number;
    l10OtLosses: number;
    l10Points: number;
    l10RegulationPlusOtWins: number;
    l10RegulationWins: number;
    l10Ties: number;
    l10Wins: number;
    leagueHomeSequence: number;
    leagueL10Sequence: number;
    leagueRoadSequence: number;
    leagueSequence: number;
    losses: number;
    otLosses: number;
    placeName: PlaceName;
    pointPctg: number;
    points: number;
    regulationPlusOtWinPctg: number;
    regulationPlusOtWins: number;
    regulationWinPctg: number;
    regulationWins: number;
    roadGamesPlayed: number;
    roadGoalDifferential: number;
    roadGoalsAgainst: number;
    roadGoalsFor: number;
    roadLosses: number;
    roadOtLosses: number;
    roadPoints: number;
    roadRegulationPlusOtWins: number;
    roadRegulationWins: number;
    roadTies: number;
    roadWins: number;
    seasonId: number;
    shootoutLosses: number;
    shootoutWins: number;
    streakCode: string;
    streakCount: number;
    teamAbbrev: TeamAbbrev;
    teamCommonName: TeamCommonName;
    teamLogo: string;
    teamName: Name;
    ties: number;
    waiversSequence: number;
    wildcardSequence: number;
    winPctg: number;
    wins: number;
  }
}

/** Player bands from Match Day Brain UI → representative count for coach adjustments */
function effectivePlayerCount(players) {
  if (typeof players === 'number' && !Number.isNaN(players)) return players
  const bands = {
    '4-6': 5,
    '7-10': 8,
    '11-16': 14,
    '16+': 18,
  }
  if (typeof players === 'string' && bands[players] != null) return bands[players]
  const n = parseInt(String(players), 10)
  return Number.isFinite(n) ? n : 8
}

export const sessionMatrix = {
  U6: {
    fun: {
      warmup: {
        name: 'Tag Game',
        desc: 'Players chase and tag each other.',
      },
      main: {
        name: 'Small Sided Game',
        desc: 'Let them play with minimal rules.',
      },
      condition: 'Every goal = celebration',
      lookFor: 'Are they smiling and involved?',
      ifNot: 'Make the game easier and faster.',
    },
    passing: {
      warmup: {
        name: 'Gate Passing',
        desc: 'Pass through small gates.',
      },
      main: {
        name: '3v3 Passing Game',
        desc: 'Encourage short passes.',
      },
      condition: 'Must pass before scoring',
      lookFor: 'Are they trying to pass, even if it fails?',
      ifNot: 'Remove pressure, give more space.',
    },
    defending: {
      warmup: {
        name: 'Protect the Castle',
        desc: 'One keeper guards a cone; others try to knock it with their ball.',
      },
      main: {
        name: 'Freeze Tag',
        desc: 'Tagged players freeze; teammates free them. Builds awareness.',
      },
      condition: 'Praise good stops — no diving in',
      lookFor: 'Are they trying to win the ball back?',
      ifNot: 'Start them closer to the ball.',
    },
    confidence: {
      warmup: {
        name: 'Copycat Dribble',
        desc: 'Coach shows a simple move; everyone copies. Big cheers.',
      },
      main: {
        name: 'Everyone Ball Free Play',
        desc: 'Each player has a ball; explore the space with no pressure.',
      },
      condition: 'Cheer effort and tries, not just goals',
      lookFor: 'Are they asking for the ball?',
      ifNot: 'Pause and prompt them to call for it.',
    },
  },
  U8: {
    fun: {
      warmup: {
        name: 'Numbers Game',
        desc: 'Call numbers, players react.',
      },
      main: {
        name: '4v4 Game',
        desc: 'Free play with goals.',
      },
      condition: 'Bonus point for teamwork',
      lookFor: 'Is everyone getting touches?',
      ifNot: 'Reduce player numbers.',
    },
    passing: {
      warmup: {
        name: 'Triangle Passing',
        desc: 'Groups of three: pass, follow your pass, keep it moving.',
      },
      main: {
        name: 'Gate Passing Race',
        desc: 'Pairs pass through cone gates; count how many in two minutes.',
      },
      condition: 'Call the name before you pass',
      lookFor: 'Are they looking before they pass?',
      ifNot: 'Slow it down, remind them to look.',
    },
    defending: {
      warmup: {
        name: 'Sharks and Minnows (Ball)',
        desc: 'Sharks win the ball fairly; minnows dribble to safety lines.',
      },
      main: {
        name: '1v1 Channel Defending',
        desc: 'Narrow lanes; defender shows attacker one way.',
      },
      condition: 'Stay on feet — block don’t dive',
      lookFor: 'Are they staying near their player?',
      ifNot: 'Shrink the space.',
    },
    confidence: {
      warmup: {
        name: 'Skill Show',
        desc: 'Each player shows one move; group claps every turn.',
      },
      main: {
        name: '4v4 with Celebrate Rules',
        desc: 'Small game; celebrate clever passes and brave tries.',
      },
      condition: 'No one is wrong — normalize mistakes',
      lookFor: 'Are they calling for the ball?',
      ifNot: 'Make calling a rule.',
    },
  },
  U10: {
    fun: {
      warmup: {
        name: 'Keep-Ball Circle',
        desc: 'Circle with two defenders inside; outside players keep possession — move after every pass.',
      },
      main: {
        name: '5v5 Small-Sided Game',
        desc: 'Two goals, normal rules; let flow happen; step in only for safety.',
      },
      condition: 'Bonus goal if the whole team touched the ball in the build-up',
      lookFor: 'Is the game flowing without stops?',
      ifNot: 'Remove rules and restart quickly.',
    },
    passing: {
      warmup: {
        name: 'Quick Passing Square',
        desc: 'Four corners, two balls if ready; two-touch limit; pass and move to the next cone.',
      },
      main: {
        name: 'Rondo 5v2',
        desc: 'Keep the ball; middle players swap when possession is lost.',
      },
      condition: 'Set play: must play wide before scoring',
      lookFor: 'Are they opening their body to receive?',
      ifNot: 'Demonstrate and restart.',
    },
    defending: {
      warmup: {
        name: 'Pressing Pairs Intro',
        desc: 'Two defenders together: one pressures ball, one blocks the easy pass.',
      },
      main: {
        name: '6v6 with Win-It-Back',
        desc: 'When you lose the ball, first two nearest players press together for five seconds.',
      },
      condition: 'Compact shape within ten steps of each other',
      lookFor: 'Are they recovering quickly?',
      ifNot: 'Add a race back to position.',
    },
    confidence: {
      warmup: {
        name: '2v1 Overload Circuits',
        desc: 'Rotating pairs always have an extra attacker; finish with easy shots.',
      },
      main: {
        name: '5v5 Personal Challenges',
        desc: 'Each player has one challenge (e.g. weak-foot pass); coach tracks effort.',
      },
      condition: 'Spotlight one brave decision per quarter',
      lookFor: 'Are they showing for the ball?',
      ifNot: 'Add a pass count rule.',
    },
  },
  U12: {
    fun: {
      warmup: {
        name: 'Rondo 6v2 with Roles',
        desc: 'Outside six keep ball; two inside press; swap on loss; brief debrief on body shape.',
      },
      main: {
        name: '6v6 Game with Flow',
        desc: 'Full small-sided game; you coach in stoppages — tempo and enjoyment first.',
      },
      condition: 'First team to five goals chooses the next silly celebration',
      lookFor: 'Are they competing and enjoying it?',
      ifNot: 'Add scoring pressure.',
    },
    passing: {
      warmup: {
        name: 'Pass-and-Move Grid',
        desc: 'Zoned grid: receive, pass, move to a new square — no standing in the same cell after a pass.',
      },
      main: {
        name: '6v6 — Three Passes Before Shot',
        desc: 'Build-up rule forces scanning and patience before finishing.',
      },
      condition: 'Reward switches of play with a cheer',
      lookFor: 'Are they scanning before receiving?',
      ifNot: 'Freeze and ask what they see.',
    },
    defending: {
      warmup: {
        name: 'Compactness Drill',
        desc: 'Back four plus mids stay within a rope length; ball travels — shape slides.',
      },
      main: {
        name: '6v6 Defensive Shape Game',
        desc: 'Defending team must regain in six seconds or concede a restart; teaches urgency.',
      },
      condition: 'Double-team only when the ball is trapped on the line',
      lookFor: 'Are they working as a unit?',
      ifNot: 'Link players with roles.',
    },
    confidence: {
      warmup: {
        name: 'Outnumbered Attack Waves',
        desc: '2v1 and 3v2 rotations; finishers rotate; emphasize good decisions over goals.',
      },
      main: {
        name: '6v6 Transition Emphasis',
        desc: 'When you win it, can you attack in three passes? Reset if not — keep it honest.',
      },
      condition: 'After each goal: what was the best choice someone made?',
      lookFor: 'Are they demanding the ball?',
      ifNot: 'Reward vocal players.',
    },
  },
}

export function buildSession(age, goal, players) {
  const ageKey = sessionMatrix[age] ? age : 'U8'
  const byAge = sessionMatrix[ageKey]
  const base = byAge[goal] || byAge.fun

  const n = effectivePlayerCount(players)
  let adjustment = ''
  if (n <= 6) {
    adjustment = 'Use smaller area'
  } else if (n >= 12) {
    adjustment = 'Split into two games'
  }

  return {
    warmup: base.warmup,
    main: base.main,
    condition: base.condition,
    adjustment,
    lookFor: base.lookFor,
    ifNot: base.ifNot,
  }
}

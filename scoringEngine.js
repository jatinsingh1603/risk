// scoringEngine.js

const SCORE_MAP = {
    A: 5,
    B: 3,
    C: 1,
    D: 0
};

const ScoreEngine = {
    scoreSection(answers) {
        const scores = Object.values(answers).map(v => SCORE_MAP[v] ?? 0);
        if (scores.length === 0) return 0;
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        return parseFloat(avg.toFixed(1));
    },

    scoreAll(sections) {
        const result = {};
        let total = 0;
        const keys = Object.keys(sections);
        keys.forEach(sec => {
            result[sec] = this.scoreSection(sections[sec]);
            total += result[sec];
        });
        result.overall = parseFloat((total / keys.length).toFixed(1));
        result.pass = result.overall >= 3.0;
        result.grade = this.grade(result.overall);
        result.gaps = this.findGaps(result);
        return result;
    },

    grade(score) {
        if (score >= 4.5) return 'Optimized';
        if (score >= 3.5) return 'Managed';
        if (score >= 2.5) return 'Defined';
        if (score >= 1.5) return 'Repeatable';
        if (score >= 0.5) return 'Initial';
        return 'Non-existent';
    },

    findGaps(scores) {
        return Object.entries(scores)
            .filter(([k, v]) => ['EDM','APO','BAI','DSS','MEA'].includes(k) && v < 3.0)
            .map(([k]) => k);
    }
};

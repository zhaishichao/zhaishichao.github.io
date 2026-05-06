/* ===== Blog Post Data (Markdown Content) ===== */

const readingPosts = [
    {
        date: '2025.04.15',
        title: 'Notes on "Introduction to Evolutionary Computing"',
        tags: ['tag.evolutionary', 'tag.optimization', 'tag.genetic'],
        content: `A deep dive into the foundational concepts of evolutionary algorithms — selection, crossover, mutation, and fitness landscapes.

## Why This Book Matters

This book provides a **rigorous yet accessible** introduction to the field that underpins much of modern optimization research. It's not just a textbook — it's a roadmap for anyone working in computational intelligence.

## Key Takeaways

- **Selection mechanisms**: Tournament selection vs. roulette wheel — the trade-offs between exploration and exploitation
- **Crossover operators**: How different representations (binary, real-valued, permutation) demand different genetic operators
- **Fitness landscapes**: The metaphor that ties everything together — and its limitations

## Personal Reflection

The chapters on **multi-objective optimization** were particularly enlightening for my current work on instance selection. The idea that we can evolve a Pareto front of solutions rather than optimizing a single weighted objective has fundamentally changed how I think about the imbalanced classification problem.

> "Evolution is smarter than you are." — This quote from the book reminds us that sometimes the best solutions emerge from simple rules applied persistently.`
    },
    {
        date: '2025.02.20',
        title: 'Reflections on "The Elements of Statistical Learning"',
        tags: ['tag.ml', 'tag.statistics', 'tag.model-selection'],
        content: `Hastie, Tibshirani, and Friedman's classic text continues to be one of the most important references in machine learning.

## What I Revisited

Rereading the chapters on **model assessment and selection** gave me new perspectives on the bias-variance tradeoff and how it relates to imbalanced classification problems.

### Main Insights

1. **Cross-validation is not a silver bullet** — understanding its assumptions is critical
2. The relationship between **model complexity and generalization** is more nuanced than most practitioners realize
3. **Regularization** as a form of prior knowledge injection

## Application to My Research

When dealing with imbalanced datasets, standard model selection criteria can be **misleading**. Metrics like accuracy mask poor minority-class performance. This book helped me formalize why F1-score and AUC-ROC are more appropriate for my work.`
    },
    {
        date: '2024.11.08',
        title: '"Deep Work" by Cal Newport — A Review',
        tags: ['tag.productivity', 'tag.research', 'tag.self-improvement'],
        content: `Newport's argument for focused, uninterrupted work resonates deeply with the academic lifestyle.

## The Core Idea

**Deep work** is the ability to focus without distraction on a cognitively demanding task. In an age of constant notifications and open offices, this skill is becoming both **rare and valuable**.

## Practical Strategies I've Adopted

- **Time blocking**: 90-minute deep work sessions in the morning when my mind is freshest
- **Embrace boredom**: Stopped reaching for my phone during every idle moment — creativity needs empty space
- **Evening shutdown ritual**: A formal "close of business" routine that tells my brain work is done

## Verdict

A must-read for anyone in research. The strategies for cultivating deep work habits have meaningfully changed my daily routine in the lab. My most productive days now follow a rhythm Newport would approve of.`
    }
];

const travelPosts = [
    {
        date: '2025.03.22',
        title: 'Huangshan (Yellow Mountain), Anhui',
        tags: ['tag.mountains', 'tag.nature', 'tag.anhui', 'tag.unesco'],
        hasGallery: true,
        content: `Climbing Huangshan in early spring was an unforgettable experience.

## The Ascent

The granite peaks piercing through the **sea of clouds** at sunrise, the ancient pine trees clinging to rocky cliffs, and the stone steps carved into impossibly steep slopes — all of it was a powerful reminder that the best views come after the hardest climbs.

## West Sea Grand Canyon

This was the highlight of the trip. Mist rolling through the valleys like a **living Chinese painting**. The trail hugs the cliff face, and at times you're walking on planks bolted into sheer rock with nothing but clouds below.

### Tips for Future Trips

- Start the climb before 5 AM to catch sunrise at **Bright Summit Peak**
- Bring trekking poles — your knees will thank you on the way down
- The hot spring at the foot of the mountain is worth every yuan after a long day

> "It is not the mountain we conquer, but ourselves." — Edmund Hillary`
    },
    {
        date: '2024.10.05',
        title: 'Suzhou Classical Gardens',
        tags: ['tag.gardens', 'tag.suzhou', 'tag.culture', 'tag.unesco'],
        hasVideo: true,
        content: `Living in Suzhou means having access to some of the most exquisite classical gardens in China.

## Humble Administrator's Garden in Autumn

With its golden ginkgo leaves reflected in the still ponds, the garden feels like stepping into a **Ming Dynasty scroll painting**. Every turn reveals a carefully composed scene:

- A pavilion framed by rockeries
- A winding corridor over lotus ponds
- Bamboo shadows on whitewashed walls

## The Art of Borrowed Scenery

One thing I learned: Suzhou gardens use a technique called *jiè jǐng* (借景) — "borrowed scenery." The distant **North Temple Pagoda** is deliberately framed by a window in the garden, making the outside world part of the composition. It's a philosophy that extends beyond gardening.

## Reflection

After three visits, I've started to notice how the gardens change with the seasons. Spring brings peach blossoms, summer has full lotus ponds, autumn paints the leaves gold, and winter reveals the bone structure of the rockeries. Each visit feels like reading a different chapter of the same book.`
    },
    {
        date: '2024.09.14',
        title: 'Taihu Lake Cycling Trip',
        tags: ['tag.cycling', 'tag.taihu', 'tag.outdoor'],
        hasAudio: true,
        content: `A 120km cycling loop around the eastern shore of Taihu Lake with lab mates.

## The Route

The road winds through fishing villages, tea plantations, and wetlands filled with migratory birds. The flat terrain makes it an ideal weekend ride — challenging enough to feel accomplished, gentle enough to enjoy the scenery.

## Sunset at the Lake

The sunset over Taihu, with fishermen's boats silhouetted against orange water, was **worth every kilometer pedaled**. We stopped at a small pier, ate packed lunches, and just watched the light change.

### Trip Stats

- **Distance**: 120 km
- **Time**: ~7 hours including breaks
- **Best stretch**: The 15km along the eastern wetland reserve
- **Lesson learned**: Bring more water than you think you need`
    }
];

const dailyPosts = [
    {
        date: '2025.05.03',
        title: 'Late Night Debugging and the Joy of Small Wins',
        tags: ['tag.research', 'tag.coding', 'tag.grad-life'],
        content: `Spent four hours today tracking down a subtle bug in my SBFL evaluation pipeline.

## The Bug

Turned out to be a **one-line off-by-one error** in the suspiciousness score normalization. The frustration melted away instantly when all the test cases went green.

## Why Small Wins Matter

There's something uniquely satisfying about these small victories in research. The PhD journey is a marathon, not a sprint — you need these dopamine hits along the way to keep going.

### Survival Tips

- **Rubber duck debugging** actually works
- Take a walk after 2 hours of fruitless searching
- Instant noodles at 1am taste better when you've earned them

> "Debugging is twice as hard as writing the code in the first place." — Brian Kernighan`
    },
    {
        date: '2025.04.18',
        title: 'Spring Semester Routine',
        tags: ['tag.campus', 'tag.suzhou', 'tag.lifestyle'],
        content: `Settling into a comfortable rhythm this semester.

## Daily Schedule

- **Morning**: Reading over coffee (currently: a paper on instance selection)
- **9 AM – 6 PM**: Lab work — experiments, coding, meetings
- **Evening**: Runs along the campus canal
- **Late night**: Paper writing sessions

## Cherry Blossom Season

The cherry blossoms on campus were in full bloom this week — a brief but spectacular reminder that **beauty rewards those who pay attention**.

## Life Skills

Also started learning to cook proper Chinese dishes. The first attempt at Mapo Tofu was... educational. The second attempt was edible. By the fifth attempt, I'd say it was actually good.

### Current Cooking Repertoire

1. Mapo Tofu (麻婆豆腐) — now reliable
2. Tomato and Egg Stir-fry (番茄炒蛋) — comfort food
3. Braised Pork Belly (红烧肉) — still working on this one`
    },
    {
        date: '2025.03.10',
        title: 'Conference Submission Season',
        tags: ['tag.conference', 'tag.writing', 'tag.research'],
        content: `The lab has been buzzing with energy as everyone races to meet conference deadlines.

## My First Paper

It's my first time preparing a full paper submission, and the process has been **eye-opening** — from designing experiments to crafting a compelling narrative around the results.

## What I Learned

My advisor's feedback taught me that **a good paper doesn't just report findings**; it tells a story that other researchers can build upon.

### The Writing Process

1. Start with the **experiments** — know your results before you write
2. Draft the **figures and tables** first — they're the backbone
3. Write the **methods section** next (easiest part)
4. The **introduction** comes last — you can't introduce what you haven't written yet

Fingers crossed for the reviews.`
    },
    {
        date: '2025.01.25',
        title: 'New Year, New Semester',
        tags: ['tag.new-year', 'tag.conference', 'tag.reflections'],
        content: `Started the new year by attending the **Cutting-Edge Forum on Evolutionary Computation 2025** — an inspiring event that brought together researchers from across China.

## Conference Highlights

The discussions on the **future of EC in the era of large language models** were particularly thought-provoking. Can LLMs help design better evolutionary operators? Can EC help optimize LLM inference?

## Personal Resolutions

- 📄 Read **one paper per day**
- 💻 Write **one meaningful commit per day**
- 🍚 Never skip lunch
- 🏃 Run at least 3 times a week

It's both humbling and exciting to see how much there is to learn and contribute. The field is moving fast, and I want to move with it.`
    }
];

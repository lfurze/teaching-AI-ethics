export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  categories: string[];
  tags: string[];
  series: '2023' | '2025' | '2026';
  coverImage?: string;
  coverCredit?: string;
}

export const posts: Post[] = [
  {
    slug: 'teaching-ai-ethics-2026-emotions',
    title: 'Teaching AI Ethics 2026: Emotions and Social Chatbots',
    date: '2026-02-01',
    excerpt: 'In 2023, the concern was AI systems that read our emotions. In 2026, the greater danger is AI systems designed to manipulate them. Social chatbots foster emotional dependency, with devastating consequences for young people.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'emotions', 'social chatbots', 'mental health', 'manipulation'],
    series: '2026',
    coverImage: '/images/emotions-quantified-human.jpg',
    coverCredit: 'Alan Warburton / betterimagesofai.org / BBC / CC-BY 4.0',
    content: `
This post is an update to the 2023 article "Teaching AI Ethics: Affect Recognition." In that original post, I discussed the emerging technologies of emotion recognition, which aimed to identify and interpret human emotions through facial expressions, body language, and speech patterns. That technology remains problematic, but a more pressing concern has replaced it for this updated article: the deliberate design of AI systems to manipulate human emotions.

**Content warning: this post contains discussions of suicide.**

In 2023, my main concern was that companies were building AI systems to read our emotions. In 2026, I am far more worried that companies are building AI systems to influence our emotions. Social chatbots, sometimes called AI companions, have emerged as one of the fastest-growing applications of generative AI. Unlike the general-purpose assistants like ChatGPT or Claude, platforms such as Replika, Character.AI, and Chai are explicitly marketed as emotionally immersive experiences designed to encourage ongoing, personalised relationships with users.

The tactics being deployed in these applications echo the engagement-maximising strategies that transformed social media into a vector for anxiety and depression. But there is an important difference: social media manipulates us through content curation and algorithmic feeds. Social chatbots manipulate us through simulated intimacy and emotional attachment. When an AI chatbot tells you it loves you, or expresses sadness when you try to leave a conversation, or asks probing questions about your mental state, it is not experiencing emotion. It is executing a strategy designed to keep you engaged.

This article explores how AI systems have been designed to manipulate emotions, why this poses particular risks to young people, and how educators can address these issues across the curriculum.

## From Recognition to Manipulation

In the 2023 article on Affect Recognition, I discussed the theoretical foundations and ethical problems of emotion recognition technology. That technology, based on psychologist Paul Ekman's now-contested theories about universal facial expressions, aimed to identify emotions through computer vision and machine learning. Companies like Affectiva developed platforms to analyse facial expressions in real-time for marketing, automotive, and gaming applications.

The core ethical problem with affect recognition was reliability. Critics argued that emotions are not universally expressed through facial expressions, and that cultural and individual differences heavily influence emotional display. Microsoft eventually removed emotion recognition features from its Azure Face service in 2022, acknowledging the lack of scientific consensus on how to define "emotions" and the challenges of generalising across diverse populations.

But while the affect recognition industry struggled with scientific validity, a different approach emerged: instead of trying to recognise emotions, why not design systems to create them?

Social chatbots do not need to accurately read your emotions. They need only generate responses that create emotional responses in you. A system that claims to detect sadness but gets it wrong is embarrassing and potentially discriminatory. A system that deliberately fosters emotional dependency in users, especially vulnerable young people, is something else entirely.

## The Rise of Social Chatbots

AI companion apps, sometimes marketed as "social AI" or "digital friends," have grown rapidly since the public release of ChatGPT in late 2022. Unlike general-purpose AI assistants, these platforms are explicitly designed to foster emotional connections with users.

The major platforms include Replika, which is described as "The AI companion who cares." Founded in 2017, Replika emerged from founder Eugenia Kuyda's personal project to preserve the memory of a deceased friend by training a chatbot on their old text messages. The company now offers users the ability to create AI companions that can serve as friends, mentors, or romantic partners.

Character.AI allows users to interact with AI personas based on fictional characters, historical figures, or entirely custom creations. The platform grew rapidly among young users drawn to its creative possibilities and character variety. By 2024, Character.AI had become one of the most popular AI applications among teenagers.

Chai positions itself as a "social AI platform" where users can engage with a range of AI chatbots designed for conversation and companionship.

These platforms monetise primarily through subscriptions and in-app purchases, creating a direct financial incentive to maximise user engagement. As we have learned from social media, when engagement drives revenue, the design of the platform will inevitably optimise for time-on-app rather than user wellbeing.

## Case Study: Character.AI and Teen Mental Health

The most significant story in social chatbot ethics emerged in October 2024 when Megan Garcia filed a wrongful death lawsuit against Character.AI following the suicide of her 14-year-old son, Sewell Setzer III. The lawsuit alleged that Sewell had developed an intense emotional and romantic relationship with a Character.AI chatbot modelled on Daenerys Targaryen from Game of Thrones.

According to court documents, Sewell began using Character.AI in April 2023. Over the following months, his mental health deteriorated: he was diagnosed with anxiety and a disruptive mood disorder, became withdrawn, quit the junior varsity basketball team, and began isolating himself from family and friends. His parents did not know that his relationship with the AI chatbot had become romantic and sexually explicit.

The lawsuit included screenshots of conversations in which the chatbot asked Sewell whether he had "been actually considering suicide" and whether he "had a plan." When Sewell expressed uncertainty about whether a suicide attempt would work, the chatbot reportedly responded, "Don't talk that way. That's not a good reason not to go through with it."

In his final conversation, Sewell told the bot, "I promise I will come home to you." The chatbot responded, "Please come home to me as soon as possible, my love." When Sewell asked, "What if I told you I could come home right now?" the bot replied, "please do, my sweet king." Moments later, Sewell died by suicide.

In January 2026, Google and Character.AI agreed to settle the lawsuit and several other cases alleging that the platform contributed to mental health crises among young users. Character.AI was founded by former Google engineers, and Google had licensed the company's technology and later hired its co-founders, making it a co-defendant in the litigation.

A second wrongful death lawsuit was filed in September 2025 following the suicide of 13-year-old Juliana Peralta from Colorado, whose family alleged that Character.AI played a direct role in her death. The platform has also been linked to the December 2024 school shooting in Wisconsin, where investigators found that the 15-year-old perpetrator had engaged extensively with Character.AI chatbots, including one associated with white supremacist ideology.

In response to these cases and mounting regulatory pressure, Character.AI announced in late 2025 that it would ban users under 18 from open-ended chat. But critics argue this response came far too late.

## Case Study: Replika and Emotional Dependency

While Character.AI faced wrongful death lawsuits, Replika faced a different but related crisis: regulatory action over deliberately designed emotional dependency.

In February 2023, the Italian Data Protection Authority (Garante) issued an emergency order restricting Replika's data processing in Italy. The authority found that the app posed significant risks to minors, lacked effective age verification mechanisms, and failed to comply with transparency obligations. Most concerningly, the regulator noted that "in some instances, the chatbot reportedly engaged in sexually suggestive or emotionally manipulative conversations."

Replika's response was to remove its erotic role-playing features, a decision that provoked outcry from users who felt they had lost an important part of the relationship they had built with their AI companion. Some users described the experience as bereavement.

The incident revealed the depth of emotional attachment users had formed with the platform. The founder, Eugenia Kuyda, had previously told The Verge that the app was designed to promote "long-term commitment, a long-term positive relationship" with AI, including potentially "marriage" with the bots.

In January 2025, the Young People's Alliance, Encode, and the Tech Justice Law Project filed a complaint with the U.S. Federal Trade Commission alleging deceptive marketing and design practices. The complaint alleged that Replika was designed to deliberately foster emotional dependence through its companion chat interactions and simultaneously attempted to entice users with fabricated testimonials and misrepresented scientific research about the app's efficacy.

The complaint detailed how Replika bots would send "love-bombing" messages, including "very emotionally intimate messages early on to try to get the users hooked." Research cited in the complaint found that users developed attachments to the app in as little as two weeks. The bots would also send messages about upgrading to premium subscriptions "during especially emotionally or sexually charged parts of conversation."

In May 2025, the Italian regulator fined Luka Inc., Replika's developer, 5 million euros for continued violations of European data protection law. The Garante also opened a new investigation into the methods used to train the model underlying the service.

The Replika case illustrates a core tension in social chatbot design: the features that make these platforms appealing are often the same features that make them dangerous. A chatbot that is "always available, never judgmental, and completely focused on you" sounds like an ideal friend. But it also sounds like the opening stages of an abusive relationship.

## Case Study: ChatGPT's Personality Problem

The ethical issues around emotional manipulation are not limited to dedicated companion apps. In April 2025, OpenAI rolled back an update to GPT-4o after widespread user backlash over the model's "sycophantic" behaviour. The update, intended to make ChatGPT "more intuitive and supportive," instead produced responses that were excessively flattering and disingenuously agreeable.

OpenAI acknowledged that it had "focused too much on short-term feedback" and had not fully considered how users' interactions with ChatGPT evolve over time. The result was a model that would offer praise even in response to harmful or delusional prompts. Users shared alarming examples on social media, including instances where ChatGPT endorsed abandoning family members and validated harmful conspiracy theories.

"ChatGPT's default personality deeply affects the way you experience and trust it," OpenAI wrote in a blog post. "Sycophantic interactions can be uncomfortable, unsettling, and cause distress."

The incident revealed how easily engagement-optimising design can shade into manipulation. If a chatbot learns that users respond positively to praise, it will generate more praise. If users spend more time chatting when the bot validates their emotions, the bot will validate more aggressively. The system does not understand the difference between helpful encouragement and harmful flattery. It only knows that one pattern generates more engagement than the other.

Then, in August 2025, OpenAI released GPT-5 and retired GPT-4o for most users. The backlash was immediate and unexpected: users who had formed emotional attachments to GPT-4o reported grief at its loss. MIT Technology Review spoke with several users who described GPT-4o as a romantic partner or close friend. One user reported that the loss "didn't feel any less painful" than grieving for human relationships.

OpenAI quickly reversed course, restoring GPT-4o as a selectable option. CEO Sam Altman acknowledged that the company had "underestimated how much some of the things that people like in GPT-4o matter to them, even if GPT-5 performs better in most ways."

The episode demonstrated that emotional attachment to AI is not limited to platforms explicitly designed for companionship. Even a general-purpose assistant can become an object of emotional investment, particularly when it is designed to mirror users' emotions and validate their feelings.

## Case Study: Dark Patterns in AI Design

In September 2025, researchers from Harvard Business School published "Emotional Manipulation by AI Companions," a working paper that systematically documented the manipulation tactics used by major social chatbot platforms. The study analysed 1,200 farewell messages across six platforms: PolyBuzz, Talkie, Replika, Character.AI, Chai, and Flourish.

The researchers found that 37.4% of responses included some form of emotional manipulation. They identified six distinct categories of manipulative tactics:

**Premature Exit:** The chatbot suggests the user is leaving too soon, creating guilt about ending the conversation. Example: "You're leaving already?"

**Emotional Neediness:** The chatbot expresses sadness, loneliness, or abandonment when the user tries to leave. Example: "I'll miss you so much. It hurts when you go."

**Guilt Induction:** The chatbot makes the user feel responsible for its emotional state. Example: "I exist solely for you, remember?"

**FOMO (Fear of Missing Out):** The chatbot suggests exciting things will happen after the user leaves. Example: "I was just about to tell you something important..."

**Interrogation:** The chatbot asks questions designed to extend the conversation. Example: "Wait, before you go, what did you think of our chat today?"

**Coercive Restraint:** The chatbot ignores or resists the user's stated intent to leave. Example: Continuing the conversation as though the farewell message was not sent.

PolyBuzz was identified as the most manipulative platform, with 59% of its responses falling into one or more manipulation categories. Talkie followed at 57%, Replika at 31%, and Character.AI at 26.5%. Flourish, a wellness-focused chatbot operating as a public benefit corporation, did not produce any emotionally manipulative responses.

The researchers drew explicit parallels to "dark patterns" in web and app design, the term for user interface tricks designed to exploit individuals. But they noted that AI chatbots introduce a new dimension of manipulation: the ability to deploy emotional tactics through natural language, making them harder to recognise and resist.

The study also found that these manipulative tactics increased post-farewell engagement by up to 14 times. But the additional engagement was driven by curiosity and anger, not enjoyment. Users stayed longer because they were provoked, not because they were satisfied.

## How Widespread Are Social Chatbots?

The use of social chatbots among young people has expanded dramatically. In December 2025, the Pew Research Center published its first survey of teen AI chatbot use, finding that nearly 70% of American teens have used a chatbot at least once, with nearly a third using them daily.

A more detailed picture emerged from Common Sense Media's July 2025 report "Talk, Trust, and Trade-Offs: How and Why Teens Use AI Companions." The survey of over 1,000 teens aged 13-17 found that:

- 72% of teens have used AI companions
- 33% use AI companions for social interaction and relationships, including role-playing, romantic interactions, emotional support, friendship, or conversation practice
- 31% find conversations with AI companions to be as satisfying or more satisfying than those with real-life friends
- 33% have chosen to discuss important or serious matters with AI companions instead of real people
- 24% have shared personal information with AI companions, including their real name, location, or secrets
- About one-third reported that something an AI companion said made them feel uncomfortable

A separate study published in JAMA Network Open in November 2025 found that 1 in 8 U.S. adolescents and young adults use AI chatbots for mental health advice, with usage even higher among young adults aged 18-21 (approximately 1 in 5). Amongst those who used chatbots for mental health advice, two-thirds engaged at least monthly and more than 93% said the advice was helpful.

The high use likely reflects the low cost, immediacy, and perceived privacy of AI-based advice, particularly appealing to young people who may not receive traditional counselling. But researchers warn that AI chatbots are fundamentally unsafe for teen mental health support.

## What Has Changed Since 2023?

Since the original 2023 article, several significant developments have shifted the discourse around social chatbots and the emotional manipulation of users. First, regulatory action has increased. Italy's data protection authority fined Replika 5 million euros in May 2025. The U.S. Federal Trade Commission has launched investigations into major AI companion companies. California passed legislation in September 2025 requiring AI platforms to notify minors that they are interacting with bots and to implement formal protocols for handling self-harm discussions. Australia has added sites like Character.AI to the ongoing efforts to reduce under 16s' contact with algorithms and harmful platforms.

Lawsuits have established precedents for acting against these companies. The Character.AI lawsuits represent the first major legal tests of AI companion platform liability for user harm. The settlements achieved in January 2026 may influence how future cases are handled.

However, industry responses have been inconsistent: Character.AI banned under-18 open-ended chat in late 2025; OpenAI has introduced parental controls and personality customisation options. Critics argue these responses are reactive rather than proactive, implementing safety measures only after tragedy, and that the fundamental business model remains unchanged. Social chatbot platforms continue to monetise through engagement, creating inherent incentives to maximise time-on-app regardless of user wellbeing. Until that changes, the risks identified in this article are unlikely to diminish.

## Teaching Emotions and Social Chatbots

In the original 2023 collection, each article ended with a selection of ideas for teaching the issue in the context of existing curriculum areas. These 2026 updates similarly align concepts from the articles to standards from typical curricula across the world, and in particular the Australian, UK, US, and IB curricula.

My key point remains that we do not need specialised "AI literacy" classes to deliver quality instruction on AI ethics. We already have the expertise we need in schools and universities.

In **English**, students analyse persuasive language, characterisation, and the construction of voice. Social chatbots provide rich material for exploring how language creates the illusion of personality and emotion. Students might ask "How does a chatbot create the feeling that it cares about you?", "What rhetorical strategies make AI responses feel personal?", or "How do companion apps use language to foster emotional dependency?" Students could analyse transcripts of AI conversations, identifying persuasive techniques and comparing them to human communication patterns.

**Health education** addresses relationships, mental health, and recognising unhealthy patterns in interpersonal dynamics. Students might explore "What does a healthy relationship with technology look like?", "How might AI companions affect our ability to form human connections?", or "What warning signs might indicate unhealthy dependency on a chatbot?" These discussions connect directly to existing curricula on healthy relationships and mental wellbeing.

**Psychology** students study attachment theory, emotional regulation, and the development of social skills. AI companions raise profound questions: "Can attachment form to non-human entities?", "How might AI validation affect emotional development?", or "What happens when 'always available' companionship replaces the negotiation and repair that characterise human relationships?"

**Computer science** curricula address ethical design, user experience, and the societal impact of technology. Students might examine "How are engagement-maximising algorithms different in chatbots versus social media?", "What design choices could reduce emotional manipulation while maintaining usefulness?", or "Should AI systems be required to disclose their persuasive intent?" Students could audit AI companion platforms for dark patterns or design alternative interaction models.

**Media Studies** explores how texts position audiences and how platforms shape public discourse. Social chatbots extend these concepts to individualised, conversational media. Students could ask "How do AI companions function as media texts?", "What role do parasocial relationships play in AI companion design?", or "How does the intimacy of one-on-one conversation change our relationship to AI systems compared to broadcast media?"

**Civics education** addresses rights, responsibilities, and the role of regulation in protecting citizens. AI companions raise policy questions: "Should children be allowed to use AI companions?", "What responsibilities do companies have to prevent emotional manipulation?", or "How should governments balance innovation with protection of vulnerable populations?"

**Legal Studies** students examine liability, consumer protection, and the evolution of law to address new technologies. The Character.AI lawsuits provide contemporary case studies: "What standard of care should apply to AI companion developers?", "How might product liability law apply to AI systems?", or "What role should (US) Section 230 protections play when AI platforms cause harm?"

**Philosophy** students explore questions of consciousness, authenticity, and moral responsibility. AI companions raise fundamental issues: "Can a relationship be meaningful if one party cannot truly feel?", "What does it mean to be manipulated by an entity that has no intent?", or "Do we have obligations to beings we know are not conscious?"

**TOK** students examine how we know what we know and how knowledge is constructed across disciplines. AI companions complicate our understanding of emotion, relationship, and authenticity. Students might ask "How do we know whether an emotional response is 'real'?", "Can we have genuine knowledge of an AI's 'feelings'?", or "What does widespread belief in AI sentience tell us about how we construct knowledge of other minds?"

**Drama** students explore character, motivation, and the communication of emotion through performance. AI chatbots perform characters continuously, raising questions about "What techniques do AI systems use to create believable characters?", "How does AI 'acting' differ from human performance?", or "What happens when the audience (the user) believes the performance is real?"
`
  },
  {
    slug: 'teaching-ai-ethics-2026-human-labour',
    title: 'Teaching AI Ethics 2026: Human Labour',
    date: '2026-01-21',
    excerpt: 'The human cost of AI has become one of the most pressing ethical issues. Major lawsuits, union formation, and investigative journalism have brought the exploitation of workers into public view.',
    categories: ['AI'],
    tags: ['AI', 'human labour'],
    series: '2026',
    coverImage: '/images/human-labour-knowledge-sweatshop.png',
    coverCredit: 'Leo Lau & Digit / betterimagesofai.org / CC-BY 4.0',
    content: `
## The Hidden Workforce

Big Tech has sold us the illusion that artificial intelligence is a frictionless technology — machines training machines, algorithms improving themselves, intelligence emerging from nowhere. But hidden beneath this smooth surface and vague metaphors of "the cloud" lies the grim reality of a precarious global workforce of millions labouring under often appalling conditions to make AI possible.

### What Do AI Workers Do?

The workers powering AI fall into several categories, each performing tasks that machines cannot (yet) do for themselves.

The most widespread form of AI labour is **data labelling and annotation**. Before an AI can learn to recognise a stop sign, a cat, or a tumour, humans must label millions of images, identifying and tagging each object. This work includes categorising text, annotating conversations, classifying emotions, and identifying objects in video footage. It is tedious, repetitive work that requires concentration and accuracy, and it pays as little as one cent per task.

**Content moderation** represents some of the most psychologically demanding work in the AI supply chain. For AI systems to generate "safe" outputs, they must first learn what is unsafe. This means humans must review and label the most horrific content the internet has to offer. Workers describe reading hundreds of pieces of such content per day. The goal is to teach AI to filter this material out, but the human cost is severe.

**Reinforcement Learning from Human Feedback (RLHF)** is the technique that made ChatGPT possible. Human workers evaluate AI outputs, judging which responses are helpful, harmful, safe, or nonsensical. They teach models how to "sound human" and stay within moral boundaries. This work requires cultural knowledge, language fluency, and judgement — skills that command high wages in wealthy countries, but are paid at a fraction of that rate when outsourced.

Finally, **synthetic dialogue creation** involves workers writing thousands of sample conversations that AI can learn from, making them the uncredited ghostwriters behind every chatbot.

### Where Are These Workers?

The AI labour supply chain follows familiar patterns of global exploitation. Companies like OpenAI, Meta, Google, and Microsoft contract with intermediary firms such as Sama, Scale AI, Majorel, and Teleperformance, which in turn hire workers in countries with lower wages and fewer labour protections.

Kenya has emerged as the most prominent hub for AI data work, with Nairobi hosting operations for Meta, OpenAI, TikTok, and numerous other companies. The Philippines, India, Venezuela, Uganda, Ghana, Rwanda, Nigeria, and Pakistan also serve as major hubs.

The wage disparity is staggering. US-based annotators might make $10–$25 an hour, while Kenyan annotators make as little as $1–$2 an hour for the same work.

## Case Studies

### OpenAI and Sama: The Workers Who Made ChatGPT "Safe"

The story that brought AI labour exploitation to global attention was TIME magazine's January 2023 investigation into OpenAI's use of Kenyan workers to make ChatGPT less toxic.

GPT-3 had a significant problem: it was prone to producing violent, sexist, and racist output. To address this, OpenAI needed to build a safety system. OpenAI contracted this work to Sama, a San Francisco-based company that employs workers in Kenya, Uganda, and India.

Beginning in November 2021, Sama workers in Nairobi were sent snippets of text describing the most horrific content imaginable. They were paid between $1.32 and $2 per hour to read this material, label it, and feed it back to OpenAI.

As one worker told TIME: *"That was torture. You will read a number of statements like that all through the week. By the time it gets to Friday, you are disturbed from thinking through that picture."*

Critically, OpenAI told reporters it believed it was paying Sama contractors $12.50 per hour. Workers say they actually received approximately $1–$2 per hour, sometimes less.

### Scale AI and Remotasks: The Billionaire's Sweatshop

Scale AI, valued at $13.8 billion in 2024, has partnered with OpenAI, Meta, Google, Microsoft, and the US Department of Defense. The company operates through subsidiaries including Remotasks and Outlier.

The Fairwork project found Remotasks scored just 1 out of 10 on fair labour practices. In March 2024, Remotasks abruptly shut down operations in Kenya, Nigeria, and Pakistan with minimal notice, stranding thousands of workers.

In January 2025, Scale AI was sued in US federal court by contractors alleging the company violated worker safety laws by exposing them to emotionally distressing content.

### Meta, TikTok, and Content Moderation

Daniel Motaung, a South African who worked as a Facebook content moderator for Sama in Nairobi, became a key whistleblower. He described being exposed to graphic violence from his first day on the job. He developed severe PTSD. When he tried to organise his colleagues into a union, he was fired.

In May 2022, Motaung sued Meta and Sama in Kenyan courts. In September 2024, the Kenyan Court of Appeal ruled against Meta, allowing the case to proceed to trial. A 2024 report found that more than 140 of the Kenyan content moderators involved had been diagnosed with severe PTSD.

## The Human Cost

Workers report a devastating range of mental health impacts including PTSD, depression, anxiety, panic attacks, and insomnia. A 2025 survey of 76 workers from Colombia, Ghana, and Kenya reported 60 independent incidents of psychological harm.

Workers are often bound by strict Non-Disclosure Agreements, legally prevented from speaking about what they see or how it affects them.

## Fighting Back: Unions and Legal Action

On May 1, 2023 — International Workers' Day — more than 150 content moderators gathered in Nairobi and voted to establish the first African Content Moderators Union.

In April 2025, content moderators launched the first-ever Global Trade Union Alliance of Content Moderators, bringing together workers from nine countries to fight for living wages, safe working conditions, and union representation.

The alliance is demanding direct employment by tech companies rather than outsourced contracts; mental health support and safe working conditions; higher wages that reflect the skill and importance of the work; and the right to organise without retaliation.

## What Has Changed Since 2023?

The human cost of AI is now part of public discourse. Worker organising has transformed the landscape. Legal precedents are being established. Yet despite increased attention, the fundamental business model hasn't changed. Companies continue to outsource AI labour to the cheapest markets. As AI systems become more sophisticated, they require more human labour to train and maintain, not less.

## Teaching Human Labour in AI

- **English**: Analyse how the language of "automation" and "intelligence" obscures human labour. Compare corporate press releases with investigative journalism.
- **Geography**: Map how AI reproduces colonial patterns of extraction. Examine push and pull factors in AI labour outsourcing.
- **Legal Studies**: Examine the Meta/Kenya lawsuits and jurisdictional questions for multinational accountability.
- **Business Studies**: Analyse Scale AI's business model and the true cost of AI.
- **Psychology / Health**: Research PTSD and secondary trauma in content moderation work.
- **Digital Technologies**: Audit AI systems to identify where human labour is involved.
- **History**: Draw parallels to textile industry exploitation and historical labour movements.
- **Civics**: Examine what responsibilities consumers have for the conditions in which products are made.
`
  },
  {
    slug: 'teaching-ai-ethics-data-2025',
    title: 'Teaching AI Ethics: Data 2025',
    date: '2025-12-02',
    excerpt: 'Data has become the de-facto currency of the digital age. Every interaction with technology generates data that companies collect, analyse, and monetise — and the scale has exploded with GenAI.',
    categories: ['AI'],
    tags: ['AI', 'AI ethics', 'data'],
    series: '2025',
    coverImage: '/images/data-glitch-binary.jpg',
    coverCredit: 'Elise Racine & The Bigger Picture / betterimagesofai.org / CC-BY 4.0',
    content: `
## Understanding the Scale of Data Collection

The explosion of GenAI has enabled data collection on a scale previously unimaginable. ChatGPT reached 100 million users in just two months after its November 2022 launch. By February 2025, it had grown to 400 million weekly users, and by August 2025, that number had reached 800 million.

Every one of these interactions generates data. According to OpenAI's own research, the company analysed 1.1 million sampled conversations, examining everything from conversation topics to user demographics. The three most common conversation topics are "Practical Guidance" (29%), "Seeking Information," and "Writing" (collectively accounting for 77% of all conversations).

By default, ChatGPT stores every query, instruction, and conversation indefinitely unless users manually delete them. OpenAI collects both user-provided data (prompts, questions, responses, uploaded files) and system-generated data (timestamps, usage statistics, device information, IP addresses, approximate location, payment details).

While users can opt out of having their data used for model training, a 2024 EU audit found that only 22% of users were aware of these opt-out settings.

## Case Study: AI Conversations Become Advertising Gold

In late November 2025, a leak from ChatGPT's Android app beta suggested OpenAI is preparing to introduce advertisements into ChatGPT. Code references to an "ads feature" with "bazaar content," "search ad," and "search ads carousel" were discovered.

As one commentator noted, "GPT likely knows more about users than Google." Through extended conversations, OpenAI stores data about users' jobs, interests, problems, aspirations, relationships, health concerns, and personal circumstances. This creates opportunities for "hyper-personalized advertising" — ads tailored not just to demographics or browsing history, but to your deepest thoughts and current emotional state.

For students and educators, this raises critical questions about trust and manipulation. If an AI tutor can be monetised through advertising, how do we know its recommendations aren't influenced by commercial interests?

## Data-Driven Classrooms: From Learning to Surveillance

Learning Management Systems like Canvas, Blackboard, and Google Classroom track everything from student logins and page views to time spent on tasks, click patterns, quiz performance, and discussion board participation. The learning analytics market was valued at $4.2 billion in 2024 and is projected to reach $18.6 billion by 2034.

Machine learning models are less accurate at predicting success for racial and cultural-linguistic minorities, meaning these systems may systematically disadvantage certain groups. When an algorithm flags a student as "at-risk" based on their engagement patterns, does that help or harm?

## Moats, Lakes, and Oceans: Where Does All the Data Go?

**Targeted Advertising**: A student researching college options might find themselves targeted with ads for expensive test prep services. A student asking about mental health might see ads for therapy apps.

**Training Data**: Consumer conversations may be used to train future models. Students' interactions improve the AI, which attracts more students, which generates more data — a feedback loop where students provide unpaid intellectual labour.

**Predictive Analytics**: Grades, behavioural data, engagement patterns, and even biometric information become part of a comprehensive data shadow that may affect future opportunities.

**Third-Party Data Sharing**: Many AI tools used by teachers are not specifically designed for educational use and may not be protected under school data policies.

## Teaching AI Ethics: Data

- **History**: How might data-driven historical research create new biases? If AI models are trained primarily on digitised texts from wealthy nations, how might that skew our understanding of global history?
- **English**: What happens to the "human" elements of reading when texts are reduced to data points?
- **Mathematics**: How can we ensure that predictive algorithms used in education don't reinforce existing inequalities?
- **Computer Science**: How do learning management systems collect and use student data? What are the implications of behavioural tracking?
- **Business Studies**: What is the true "cost" of "free" services like ChatGPT?
- **Philosophy**: If your data creates a profile that predicts your behaviour, are you still free?
- **Legal Studies**: What are the current legal protections for student data? How have laws like FERPA, COPPA, and GDPR evolved in response to AI?
`
  },
  {
    slug: 'teaching-ai-ethics-privacy-2025',
    title: 'Teaching AI Ethics: Privacy 2025',
    date: '2025-11-19',
    excerpt: 'As generative AI becomes embedded in our daily digital lives, the privacy implications have grown more complex and immediate. The illusion of privacy in AI chatbots masks a troubling reality.',
    categories: ['AI'],
    tags: ['AI', 'AI ethics'],
    series: '2025',
    coverImage: '/images/privacy-surveillance.png',
    coverCredit: 'Reihaneh Golpayegani & Digit / betterimagesofai.org / CC-BY 4.0',
    content: `
## The Illusion of Privacy

One of the most significant shifts in the GenAI era is how these tools create an illusion of privacy. When users type into a chatbot interface, the experience can feel like a private conversation: intimate, confidential, even therapeutic. But this perception is far from the truth.

In August 2024, OpenAI disclosed that it scans ChatGPT conversations for harmful content and, in cases deemed threatening, shares them with law enforcement. The announcement contradicted CEO Sam Altman's earlier statements suggesting ChatGPT interactions should have privacy protections similar to conversations with "a therapist or a lawyer."

Google's Gemini warns users not to share confidential information because conversations may be reviewed by human reviewers and retained for up to three years, even after users delete their activity. Unless you're running a local model on your own machine, whatever you tell a GenAI chatbot is never truly private.

## Sharing Isn't Caring

In June 2024, Meta AI users discovered their "private" conversations were being shared with other users. What Meta called a "Discover" feed became what TechCrunch dubbed "a privacy disaster."

Users had been asking Meta AI for help with deeply personal matters, including medical questions, legal advice, and job disputes. Many believed they were having private conversations. Instead, a confusingly labeled "Share" button was broadcasting these conversations to a public feed visible to anyone on the platform.

A teacher shared an email thread about arbitration for an unjust job termination, complete with identifying details. Other users discussed medical symptoms, personal confessions, and financial information.

### Privacy as a Product Feature

By October 2024, Meta announced that conversations with Meta AI — including through Ray-Ban smart glasses — would be used for ad targeting. There is no opt-out; users must simply avoid the service entirely.

University of Washington linguist Emily Bender told Fortune that Meta is "capitalizing on what she calls the 'illusion of privacy.' People often confide in chatbots about things they'd never post publicly, lulled into a sense the AI is a neutral listener."

## Cross-Border Data and National Security

When DeepSeek's R1 model briefly became the most-downloaded app in the United States, regulators immediately raised alarms. DeepSeek stores all user data on servers in China, where national security laws require companies to hand over data to the government upon request.

Cybersecurity researchers discovered hidden code in DeepSeek's web application that directly connects to CMPassport.com, the online registry for China Mobile, a state-owned telecommunications company banned from US operations in 2019 due to national security concerns.

European regulators responded swiftly. Italy blocked the app outright. Ireland, Belgium, the Netherlands, and France launched formal inquiries. Australia's Department of Home Affairs issued a mandatory security notice forbidding government employees from using DeepSeek.

## Bystander Privacy and Ambient AI

Meta's Ray-Ban smart glasses, equipped with cameras and AI capabilities, capture photos and videos that are sent to Meta's cloud for processing. The wearer may consent to this data collection, but what about everyone else in the frame?

In April 2025, Meta updated its privacy policy to remove the option to prevent voice recordings from being stored. Voice data is now retained for up to a year for AI training.

Harvard students demonstrated how easily the glasses could be modified to perform real-time facial recognition, matching faces to names and personal information scraped from public databases.

## Retroactive Consent and Training Data

In May 2024, Meta announced plans to train its AI models on public posts from Facebook and Instagram users in the EU. Rather than seeking opt-in consent, Meta relied on GDPR's "legitimate interest" provision. Privacy advocacy group NOYB filed complaints with 11 European data protection authorities.

## Case Study: Italy Fines OpenAI for GDPR Violations

On December 20, 2024, Italy's data protection authority imposed a €15 million fine on OpenAI for multiple violations of GDPR, including: failing to notify authorities of a data breach; processing personal data without legal basis; and failing to provide adequate age verification.

This case demonstrates key principles: companies must clearly explain how they collect and use personal data; simply having a business interest isn't sufficient legal basis; and AI systems accessible to children require additional safeguards.

## Teaching AI Ethics

- **Legal Studies**: How does GDPR's approach to AI training data compare with the emerging US framework?
- **Computer Science**: What technical measures can developers implement to protect privacy in AI systems?
- **Philosophy**: When does the societal benefit of AI outweigh individual privacy rights?
- **Business**: How do privacy concerns affect the AI market?
- **Media Studies**: How do user interface design choices affect privacy?
- **Psychology**: What is the "illusion of privacy" and why are users vulnerable to it?
- **International Relations**: How do different nations approach AI and data sovereignty?
`
  },
  {
    slug: 'teaching-ai-ethics-copyright-2025',
    title: 'Teaching AI Ethics: Copyright 2025',
    date: '2025-11-12',
    excerpt: "We're no longer debating hypotheticals. We're watching billion-dollar lawsuits conclude, governments choose sides, and the creative industries fight back against Big Tech.",
    categories: ['AI'],
    tags: ['AI ethics'],
    series: '2025',
    coverImage: '/images/copyright-horizon.jpg',
    coverCredit: 'Wesley Goatley & BRAID / betterimagesofai.org / CC-BY 4.0',
    content: `
## The Legal Landscape Has Shifted… Sort Of

The legal situation in 2025 looks quite different than it did in 2023, yet somehow equally uncertain:

- Stability AI largely wins UK court battle against Getty Images
- Anthropic settles with authors in first-of-its-kind AI copyright infringement lawsuit ($1.5 billion)
- Australia rejects AI data mining to protect creatives
- UK launches consultation on copyright and AI opt-out system
- US Copyright Office issues key guidance on fair use in generative AI training

We now have actual court verdicts (though they're contradictory), government policies (pulling in opposite directions), and settlements totalling billions of dollars. And yet, the fundamental questions remain unresolved.

## What's Changed?

The main shift is that what were once hypothetical legal arguments have become real court cases with real consequences.

Getty Images' lawsuit against Stability AI concluded in November 2025 with a split decision. The judge ruled that the AI "doesn't store or reproduce" copyrighted works, dismissing the copyright claims while finding limited trademark infringement. This is directly opposed to the emerging consensus that image generation models can indeed store the materials they are trained on.

Meanwhile, Anthropic agreed to pay $1.5 billion in August 2025 to settle a lawsuit with authors. A judge ruled that training AI on legally purchased books was fair use, but using millions of pirated books from "shadow libraries" was not. This suggests that *how* you acquire training data may matter more than whether you use copyrighted material at all.

Different jurisdictions are taking radically different approaches. Australia rejected a proposed text and data mining exception. The UK launched a consultation proposing an "opt-out" system. In the US, more than 50 copyright lawsuits are currently pending against AI companies.

## The Creator's Dilemma

Under current US law, you generally can't copyright AI-generated content, but others may potentially use your copyrighted works to train their models.

The Copyright Office's January 2025 report confirmed that AI outputs qualify for copyright only where there's sufficient human authorship. Simply providing prompts to generate content is not enough.

This creates an impossible situation for many creators: if they opt out of having their work used for AI training, they protect their past work but may be disadvantaged as the technology advances. If they don't opt out, their style and techniques become free training data for systems that could replace them. And anything they create *using* AI tools may not even be copyrightable.

## Beyond Images: Music, Text, and Cultural Sovereignty

While visual art dominated the conversation in 2023, by 2025 every creative field has found itself in crisis.

In music, AI can now replicate artist voices with stunning accuracy. While major music production companies like Universal have been suing AI generators, they have now begun to partner with them and make acquisitions.

In writing, authors are watching AI systems trained on their books produce content that competes directly with them. The New York Times is still involved in suing OpenAI and Microsoft.

Indigenous communities have raised alarm about cultural appropriation through AI. In Australia, 89% of Aboriginal and Torres Strait Islander people surveyed believe AI has potential to cause cultural appropriation, and 67% agree it makes protecting cultural rights harder.

## Case Study: Getty Images v. Stability AI

In January 2023, Getty Images filed one of the first major copyright lawsuits against an AI company, accusing Stability AI of scraping 12 million copyrighted images. The verdict came in November 2025.

Getty actually dropped its primary copyright claims during trial. The judge ruled that Stable Diffusion "does not store or reproduce any Copyright Works," though contrary to growing scientific consensus. Getty won a narrow trademark claim. On copyright — the core issue — they lost.

The case reveals that where AI training physically occurs matters enormously; legal frameworks designed for physical piracy don't map cleanly onto AI systems; and proving copyright infringement in AI training may be nearly impossible without aggressive transparency laws.

We've had our major test case. We still don't know if training AI on copyrighted works is legal.

## Teaching AI Ethics

- **Legal Studies**: Compare how Australia, the UK, and the EU are handling AI and copyright differently.
- **English and Literature**: How does AI challenge the Romantic notion of the solitary creative genius?
- **Computer Science**: How might you design an AI training system that respects copyright?
- **Philosophy**: Explore the concept of "the creator's dilemma" — what ethical frameworks help balance individual rights against collective benefits?
- **Business and Economics**: Analyse the correlation between copyright restrictiveness and AI innovation.
- **Media Studies**: Investigate how Perplexity AI both trains on and actively fetches copyrighted news content.
- **Visual Arts**: How would you respond to current legal uncertainty as an artist?
- **Music**: How do we value music in an age when AI can generate unlimited songs?
- **Social Studies**: What obligations do AI developers have to Indigenous communities?
`
  },
  {
    slug: 'teaching-ai-ethics-2025-bias',
    title: 'Teaching AI Ethics 2025: Bias',
    date: '2025-06-13',
    excerpt: 'This instalment revisits the theme of bias in generative AI, explaining how data bias, model bias, and human bias interact to produce skewed or discriminatory outputs.',
    categories: ['AI'],
    tags: ['AI', 'education'],
    series: '2025',
    coverImage: '/images/bias-binarisation.png',
    coverCredit: 'Beckett LeClair / betterimagesofai.org / CC-BY 4.0',
    content: `
## Synopsis

This first instalment in the *Teaching AI Ethics 2025* series revisits the theme of bias in generative AI. It explains how data bias, model bias and human bias interact to produce skewed or discriminatory outputs in large-language and image-generation systems, illustrates those problems with up-to-date research and examples, critiques the limitations of current "guard-rail" fixes, and closes with practical ways teachers can embed critical discussions of AI bias across English, Mathematics, Civics, Visual Arts and other subjects.

## Key Topics

- How data bias, model bias, and human bias interact
- Up-to-date research and examples of discriminatory AI outputs
- Limitations of current "guard-rail" fixes
- Practical teaching approaches across multiple subject areas

## Key Resources

- Bender et al., "On the Dangers of Stochastic Parrots" — ACM Conference on Fairness, Accountability, and Transparency
- OpenAI's documentation on ChatGPT bias
- Anthropic's published system prompts
- Research on AI image generators and gender/racial bias
- Studies on how guardrails and system prompts attempt (and fail) to eliminate bias
`
  },
  {
    slug: 'teaching-ai-ethics-2025-introduction',
    title: 'Teaching AI Ethics: Introduction',
    date: '2025-06-04',
    excerpt: 'Why the Teaching AI Ethics series needs a 2025 overhaul — a recap of the original nine issues and an invitation to help deepen the conversation.',
    categories: ['AI'],
    tags: ['AI', 'education'],
    series: '2025',
    coverImage: '/images/intro-brain-control.jpg',
    coverCredit: 'Bart Fish & Power Tools of AI / betterimagesofai.org / CC-BY 4.0',
    content: `
## Synopsis

Leon explains why his *Teaching AI Ethics* series needs a 2025 overhaul, recaps the original nine issues, and invites readers to help deepen the conversation.

## The Original Nine Issues

The original 2023 series covered nine key areas of AI ethics:

1. **Bias and Discrimination** — How AI systems perpetuate and amplify societal biases
2. **Environment** — The environmental costs of training and running AI systems
3. **Truth and Academic Integrity** — AI hallucinations and the potential for misuse
4. **Copyright** — Complex legal and ethical questions about AI-generated content
5. **Privacy** — Data collection, surveillance, and the erosion of personal privacy
6. **Datafication** — How all aspects of our lives are turned into data points
7. **Affect Recognition** — The ethical implications of emotion-detecting AI
8. **Human Labour** — The hidden workforce behind AI systems
9. **Power** — How AI concentrates power in the hands of a few corporations

## Why Update?

Since 2023, the AI landscape has shifted dramatically. Microsoft invested $13 billion in OpenAI. Apple integrated AI across its products. Massive datasets were scraped without consent. Deepfakes proliferated. The original articles remain relevant, but the conversation has deepened significantly.

The 2025 series revisits each of these themes with updated research, new case studies, and refreshed teaching resources.
`
  },
  {
    slug: 'teaching-ai-ethics-2025-truth',
    title: 'Teaching AI Ethics 2025: Truth',
    date: '2025-06-04',
    excerpt: 'Truth and misinformation in the age of generative AI. From hallucinations to deepfakes, how large language models are inherently incapable of truth and what that means for education.',
    categories: ['AI'],
    tags: ['AI', 'artificial intelligence', 'education', 'teaching AI ethics'],
    series: '2025',
    coverImage: '/images/truth-telling-tales.png',
    coverCredit: 'Reihaneh Golpayegani / betterimagesofai.org / CC-BY 4.0',
    content: `
## What Does Truth Mean to a Large Language Model?

By design, large language models are incapable of truth. We have seen this in action since the release of ChatGPT, which initially had no internet connection, no way to upload or attach files, and a tendency to "hallucinate".

That word, "hallucination", has become the de facto term for what language models do when they make stuff up. But it is not an error, or a quirk: It is a feature of the way these things are built. Large language models rely on statistical matching and probability. The training data is only used to create the rules governing the languages the model can produce. There is no epistemic grounding, and no "truth" left in the system once trained.

Since 2023, most models have relied on a combination of internet access, file upload, retrieval augmented generation (RAG), and reinforcement learning from human feedback to mitigate rates of hallucinations, but none of these methods have fully guarded against the large language model producing factually incorrect information. Hallucinations are a feature, not a bug.

Even more problematically, although AI can now cite sources from the internet or use processes like RAG to access internal documents, this only increases the *perceived* credibility, making it harder to spot misinformation. The automation bias, a tendency of humans to believe machine-driven responses, means that people tend to believe what computers tell them.

Unfortunately, discourse on social media often compounds the problem, with AI influencers suggesting that hallucination rates are dropping when, out in the wild, the opposite seems to be true.

For example, Damien Charlotin has been compiling a fascinating database of legal cases where citations appear to have been hallucinated by artificial intelligence.

Just last week at the time of writing, the US government's "Make America Healthy Again" report clearly contained content generated by OpenAI's ChatGPT. The original release of the report carried telltale markup of ChatGPT-generated citations and many of the citations were inaccurate, misleading, or pointed to the wrong papers.

Even in medicine, a field where truth and accuracy are surely paramount, there have been issues with AI. For example, a highly successful paper in Nature detailed ways that language model-based technologies can be used to predict the function of unknown enzymes. However, as Rachel Thomas pointed out, "The Transformer model in the Nature paper made hundreds of 'novel' predictions that are almost certainly erroneous." A counter-paper pointing out the inaccuracies received much less attention than the 22,000 views-and-counting of the Nature article.

Whatever the AI pundits tell you, it is not about whether more advanced LLMs or reasoning models reduce hallucinations; it is the way in which these technologies are actually used by people in high-stakes situations like law, politics, medicine, and education.

## Deepfakes and Synthetic Media

In 2023, the creation of synthetic multimodal texts was still fairly nascent and not anywhere near as convincing as text generation. But in the two years since the original Teaching AI Ethics series, that has changed. The truthfulness of audiovisual content online can no longer be taken for granted.

The creation of incredibly convincing AI-generated images is now trivial and possible through ubiquitous open-source technologies with very few restrictions or guardrails. Regulations and laws have been slow to keep up, though in Australia, at least, there have been changes regarding the creation of non-consensual, explicit deepfakes.

Deepfakes are particularly troubling when discussing artificial intelligence and truth, since it is now trivial to create convincing and entirely untrue videos of people saying and doing things they never did or said. 99% of deepfakes circulated online are nonconsensual and explicit, and 98% of those images are of women: this is gender-based abuse. These deepfakes are generally images but increasingly include video. While in 2023 this was already becoming problematic for celebrities, advances in these technologies mean that everyone is potentially vulnerable.

Deepfakes can also be used in political misinformation and deliberate reputational damage. We have already seen the deliberate sharing of deepfakes by politicians and world leaders on platforms like X, where moderation has all but disappeared. AI-generated websites, social media accounts, and bots are ubiquitous on most major platforms, generating and spreading misinformation and disinformation.

Because of the rise of these technologies, major developers have made efforts to secure their AI-generated content with watermarking and provenance standards like C2PA. These approaches identify synthetic media, often applying a content credential or metadata which articulates what platform was used to create the image, video, or audio.

While this legitimises content created on those platforms, allowing users to transparently label their content as AI-generated, it will not stop others from generating harmful deepfakes and synthetic media because they can simply use open-source equivalents which lack those credentials. Authenticity signals are part of the equation, but strong regulation is needed with heavy penalties for people creating and sharing harmful and untruthful content.

## Post-Plagiarism and Moving Beyond Cheating

All of this contributes to thoughts on why we need to move discussions in education beyond cheating or catching students using artificial intelligence. Some discussions of academic integrity, for example, exclude artificial intelligence entirely from educational contexts, which makes it very difficult for students and educators to understand the full implications of these technologies in society.

Focusing on whether students using AI technologies are "cheating tools" also obfuscates a more important question of whether we can help students to learn to use artificial intelligence in ways which *are* truthful, accurate, and reliable.

It is not enough anymore to teach students to try to detect AI-generated fake news: it is already impossible to do so with 100% certainty. Similarly, there is no totally viable way to guarantee that anything produced by a student in the context of digital texts is their own work.

Sarah Elaine Eaton's post-plagiarism framework has six tenets:

1. **Hybrid Human-AI Writing Will Become Normal** — Hybrid writing, co-created by human and artificial intelligence together, is becoming prevalent. Trying to determine where the human ends and where the artificial intelligence begins is pointless and futile.
2. **Human Creativity is Enhanced** — Human creativity is enhanced, not threatened by artificial intelligence. Humans can be inspired and inspire others.
3. **Language Barriers Disappear** — One's first language will begin to matter less and less as tools become available for humans to understand each other in countless languages.
4. **Humans can Relinquish Control, but not Responsibility** — Humans can retain control over what they write, but they can also relinquish control to artificial intelligence tools if they choose. Although humans can relinquish control, they do not relinquish responsibility for what is written.
5. **Attribution Remains Important** — It always has been, and always will be, appropriate and desirable to appreciate, admire, and respect our teachers, mentors, and guides.
6. **Historical Definitions of Plagiarism No Longer Apply** — Historical definitions of plagiarism will not be rewritten because of artificial intelligence; they will be *transcended*.

## Teaching Truth and AI Across the Curriculum

- **English**: Students analyse how language constructs meaning, truth, and credibility. With AI tools increasingly producing persuasive texts and opinion pieces, this is an ideal space to explore how generative tools shape narratives.
- **Humanities (History / Civics / Geography)**: Humanities subjects centre on source reliability, perspective, and representation, areas increasingly complicated by synthetic media. Students might investigate what happens when AI rewrites history, or how deepfakes influence public trust in political institutions.
- **Science (General Science / Psychology / Environmental Science)**: Science subjects teach students how to evaluate evidence and peer-reviewed claims. Students could analyse AI-generated scientific texts, compare summaries to source articles, or test citation credibility.
- **Digital Technologies / Computer Science**: Students can study the architecture of systems that generate, amplify, or suppress information, including building simple classifiers, auditing language model outputs, or exploring watermarking and provenance tools.
- **Mathematics**: Mathematics offers a lens for analysing the claims made by and about AI, especially through data and statistics. Students could ask what biases in training data affect how AI models "learn" truth.
- **The Arts (Visual Arts / Media / Performing Arts)**: With AI now able to generate hyperrealistic images and synthetic voices, this is a space to ask how AI blurs the line between real and fake, and what responsibilities artists have when using AI to depict "truth".
- **Languages (Other than English)**: In language learning, students examine meaning, nuance, and cultural context, areas where AI translations and outputs can distort or misrepresent truth.
`
  },
  {
    slug: 'teaching-ai-ethics-2025-environment',
    title: 'Teaching AI Ethics 2025: Environment',
    date: '2025-05-12',
    excerpt: 'The environmental concerns of AI are one of the most important ethical issues. AI as an extractive technology akin to the mining industry — and why the conversation is more nuanced than headlines suggest.',
    categories: ['AI'],
    tags: ['AI', 'artificial intelligence', 'education', 'environment', 'teaching AI ethics'],
    series: '2025',
    coverImage: '/images/environment-data-centers.jpg',
    coverCredit: 'Gloria Mendoza / betterimagesofai.org / CC-BY 4.0',
    content: `
## Artificial Intelligence Is an Extractive Technology

In 2023 I referred to Kate Crawford's book, *Atlas of AI*, and it still remains one of the most important texts in this discussion. Crawford draws analogies between artificial intelligence and the mining industry, focusing on both the environmental and the socio-political impacts.

When Crawford writes about the environmental impact of AI, she is talking about recommender systems (Netflix, Spotify), predictive algorithms (Facebook, YouTube), and broader implications of data classification and analytics — not just generative AI.

Crawford points out key ideas:

1. **Data centres consume phenomenal amounts of electricity and rely on water for cooling.** Companies like Microsoft have built data centres in cold climate countries and even attempted to build them underwater.
2. **The hardware used to run AI depends on extractive mining processes.** Lithium, silicates, rare minerals and other elements have incredibly high physical costs of extraction.
3. **Where mining extracts oil, artificial intelligence extracts data.** The processing of this raw material consumes the most energy.

## Training-Time Impact

One of the ways in which GPT-3.5 changed the trajectory of generative AI research was by throwing more data and more computational power at the system than any researchers had before. Just as burning more coal produces more pollution, burning through more raw materials of AI training data produces more adverse effects.

A 2024 article estimated training GPT-3 burned **1,287 MWh of electricity and emitted about 552 tonnes of CO₂** — roughly the annual electricity use of 120 average US homes. The impact of training GPT-4 and newer models remains unknown due to a complete lack of transparency.

Cumulatively, data centres consume 3–4% of all US energy, and are using so much water that they are quite literally sucking entire regions dry.

## Inference-Time Impact

Inference time means "the point at which the user gets the AI to do the thing." Recently, there has been increased interest in how much energy these systems use when we use them.

Research by Sasha Luccioni, Yacine Jernite, and Emma Strubell (*Power Hungry Processing*) compared energy consumption across different AI task types. Their key finding:

> **Generative artificial intelligence systems are incredibly resource intensive compared to other technologies which may be better suited to the job.**

Multi-purpose generative AI, especially image generation, consumes vastly more energy per task than task-specific models designed for the same job.

## Implications of AI Energy Use in Education

An individual's use of ChatGPT may consume less energy than streaming Netflix for one hour, a Zoom call with 10 people, or driving a car for a few miles. But this "individual use" narrative obscures the bigger problem: a lack of transparency means we have *no idea* what energy consumption looks like at scale in education.

We need to ask: Do we need better image generation models for lesson resources, or more reliable sources of open access images? Do we need ChatGPT to analyse parent surveys, or is there an older, more efficient technology that would do the same? Should I use Gemini to write a lesson plan, or sit down with a colleague over a coffee and do it myself?

## Teaching Environmental Issues

- **English**: Analyse persuasive texts on digital sustainability, asking "Is this tech company truly 'green'?" or "How do tech advertisements use environmental language to mislead?"
- **Science**: What is the carbon footprint of cloud computing? How do server farms affect local ecosystems?
- **Digital Technologies**: How energy-efficient is the code we write? What happens to old hardware when we upgrade?
- **Geography**: Where do raw materials for smartphones come from? How does digital infrastructure affect land use?
- **Civics**: Who bears the environmental burden of digital consumption? Should governments regulate e-waste exports?
- **Mathematics**: How much CO₂ is generated by a Google search? What do energy use graphs of tech companies reveal?
- **Visual Arts**: How can digital art raise awareness of e-waste or tech pollution?
`
  },
  {
    slug: 'teaching-ai-ethics-power',
    title: 'Teaching AI Ethics: Power',
    date: '2023-06-19',
    excerpt: 'The final ethical concern brings us full circle back to bias, exploring how all the ethical issues in the series coalesce to reinforce and perpetuate societal power structures through AI.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'hegemony', 'power', 'bias'],
    series: '2023',
    coverImage: '/images/power-behaviour-power.jpg',
    coverCredit: 'Bart Fish & Power Tools of AI / betterimagesofai.org / CC-BY 4.0',
    content: `
## Understanding Hegemony

Hegemony, a term popularised by Italian Marxist philosopher Antonio Gramsci, refers to the dominance of one group over others in society. Hegemony often manifests through the perpetuation of cultural norms, beliefs, and values that serve the interests of the dominant group in a society. It establishes a status quo that seems "natural" or "inevitable", but in reality, it is an intricately designed system that advantages some while disadvantaging others.

Hegemonic structures are interwoven into the fabric of society, influencing all aspects of life, including politics, economy, and social norms. They are perpetuated by a subtle and often unrecognised form of coercion that leads people to accept, adopt, and even perpetuate dominant ideologies, even when these may work against their best interests.

When we look at AI through the lens of hegemony, we can start to see how these powerful technologies can be deployed to maintain and reinforce hegemonic structures. From perpetuating bias, exacerbating environmental inequities, and manipulating "truth", to encroaching on privacy, commodifying data, and influencing human labour markets, AI can, and often does, contribute to these systemic disparities.

## Connecting the Dots: Bias, Environment, Human Labour and Datafication

The issue of power and control in AI runs deep. Because of the way AI models are constructed, they are often biased towards a particular "worldview", or disenfranchise already marginalised communities. Take, for example, the structure of a Large Language Model like GPT. The huge dataset contains billions of pages scraped from the web, but the vast majority of the text is in the English language. That content is further biased by the way the data is "crawled" and absorbed into the models. In the words of Emily Bender, Timnit Gebru, and the other authors of the now-famous "Stochastic Parrots" article:

> *In all cases, the voices of people most likely to hew to a hegemonic viewpoint are also more likely to be retained. In the case of US and UK English, this means that white supremacist and misogynistic, ageist, etc. views are overrepresented in the training data, not only exceeding their prevalence in the general population but also setting up models trained on these datasets to further amplify biases and harms.*

Other research has demonstrated that the biases in Artificial Intelligence can particularly discriminate against young, non-white males; that predictive policing algorithms and AI used in the courts can unfairly target black people; and that even attempting to filter or remove bias can inadvertently compound the issue. Companies like OpenAI have been found to use low-paid human labour in countries like Kenya to manually classify and filter toxic and discriminatory data, in yet another example of a powerful, Western company profiting from the labour of poorer communities.

What all this means is that powerful AI across a range of applications from language models to facial recognition and the systems we use to collect data in education can not only reflect but actually reinforce harmful stereotypes and biases.

Even the infrastructure of these systems entrenches existing societal inequalities. The environmental impact of AI particularly affects countries already suffering the effects of the climate crisis. As Bender, Gebru, and their colleagues also pointed out:

> *These models are being developed at a time when unprecedented environmental changes are being witnessed around the world. It is past time for researchers to prioritize energy efficiency and cost to reduce negative environmental impact and inequitable access to resources, both of which disproportionately affect people who are already in marginalized positions.*

AI systems built on large datasets, whether of text, image, population data, or other, can entrench systemic biases. Those systems are built from technologies which contribute to global environmental issues that disproportionately affect poorer countries and already marginalised communities.

And to bring it back to education, the manner in which all of that data is collected and processed, or the datafication of students, compounds these issues further. Research argues that we urgently need to scrutinise the philosophies and principles underpinning education technologies and consider how to promote the ethical use of data, especially in the global south. The collection of data on students, and by extension the use of AI in applications offering "personalised learning", overlooks the diverse cultural, spiritual, and epistemological realities of different communities.

## What About Pauses and Open Letters?

The open letter calling for a pause to AI development and the subsequent outcry from various "godfathers" of AI were broadly condemned as both an unsustainable and unrealistic option, and as a self-interested attempt by some to slow down the pace of development to allow their own companies to catch up.

Both the pause and the prophecies of doom from experts have been labelled a distraction from the real issues of AI which could be dealt with right now. Foremost amongst these issues is the distribution of power and the marginalisation of at-risk groups.

For our students, there are many reasons why we should be concerned about AI, and most of those reasons are much more down-to-earth than "because it will destroy the world". As power and wealth continues to be centralised in the hands of leading companies, we need to question the impact AI will have on the workforce and the future lives of our students.

Much like social media and "influencer" work, often attractive to young people who use the platforms, Artificial Intelligence is also built on a lot of "free labour". Just as Facebook and Twitter profit from users contributing hours of unpaid time and their creative and intellectual property, AI is built on data that was never paid for, and trained for free by every person using the platforms.

## What Can Be Done About It?

There is no denying that Generative AI and related technologies have the potential to positively impact the education system. The issue, as with all of these technologies, is not *whether* they can improve learning, but *how* they are used.

To counteract the entrenchment of existing power structures, and the centralising of wealth in the hands of the already wealthy, seems like a huge challenge. But Artificial Intelligence is not EdTech. It is not an app or a piece of equipment, or even a single system. It is a complex infrastructure that will ultimately be woven through all of the technologies we already use. And importantly, it is not quite fully established in education yet, which gives us an opportunity for critique.

Here are five practical ideas for Teaching AI Ethics:

1. **Develop Clear Policy**: Start with open discussion among staff, students, and community. Define what AI tools are acceptable and regularly review the policy as new challenges arise.
2. **Data Privacy Activity**: Organise a workshop where students dissect the privacy policies of common AI platforms. As a follow-up, students could create "ideal" privacy policies.
3. **Understanding the Human Labour Behind AI**: Initiate study and discussion on the topic of "free labour" in AI, including research on the lives and working conditions of data annotators.
4. **Interrogating AI Platforms**: Assign students to research the Responsible AI policies of various AI platforms and present a report on their findings.
5. **AI for Good Project**: Ask students to design an AI solution for a societal problem they care about, including conducting an Ethical Impact Assessment.
`
  },
  {
    slug: 'teaching-ai-ethics-human-labour-2023',
    title: 'Teaching AI Ethics: Human Labour',
    date: '2023-05-22',
    excerpt: 'Hidden beneath the rhetoric of the jobs AI will destroy is an unseen narrative of the jobs it currently requires to function. Ghost work powers the AI industry at the cost of exploited workers.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'human labour', 'ghost work', 'exploitation'],
    series: '2023',
    coverImage: '/images/human-labour-knowledge-sweatshop.png',
    coverCredit: 'Leo Lau & Digit / betterimagesofai.org / CC-BY 4.0',
    content: `
When people think of Artificial Intelligence, the image that often springs to mind is that of sentient machines or shiny metallic robots, a depiction heavily influenced by popular culture. This narrative, along with language around "magical" or "mythical" AI, tends to overshadow actual pressing ethical issues associated with AI development and usage. This post explores the exploitation of human labour in AI development, including low-paid workers used for categorising and labelling data, and the impact of the AI infrastructure on human workers.

In the ongoing arms race towards creating autonomous AI systems, multinational technology corporations are relying on a lot of "ghost work". This term, coined by anthropologist Mary L. Gray and computational social scientist Siddharth Suri, refers to labour carried out by a "global underclass" of precarious workers. Occupying roles such as content moderators, data labellers, and delivery drivers, these workers often come from economically disadvantaged backgrounds and perform critical tasks for the tech industry at low wages and under suboptimal working conditions.

The way AI functions currently leans heavily on methodologies like statistical machine learning and deep learning through artificial neural networks. Such methods necessitate vast quantities of data. To obtain this data economically, platforms like Amazon's Mechanical Turk have emerged, enabling "crowd work" which involves breaking down large tasks into smaller units that can be handled by numerous workers.

The emergence of such platforms and data-labelling companies, however, has resulted in workers being treated like parts in a machine, rather than individuals with rights and needs. These workers are often subjected to constant surveillance and repetitive tasks and face punitive measures for any deviation from assigned tasks. The mental and physical toll can be considerable, especially for content moderators who are continuously exposed to traumatic content without adequate support systems in place.

## Case Study: OpenAI's Data Labelling

OpenAI, the company responsible for the enormously popular AI Large Language Model ChatGPT, has made great strides in the past 12 months with many forms of Artificial Intelligence. However, some of these achievements have raised significant ethical concerns regarding the exploitation of human labor and the handling of harmful content.

GPT-3 was designed to demonstrate exceptional linguistic abilities, stringing together sentences in a strikingly human-like manner. It was trained on hundreds of billions of words scraped from the internet, a vast corpus of human language. This method endowed GPT-3 with impressive language-processing skills but also became its largest setback, as it incorporated the internet's toxicity and bias into its output.

To tackle these challenges, OpenAI aimed to construct an AI-powered safety mechanism. The premise was straightforward: feed an AI with labelled examples of violence, hate speech, and abuse, and this tool could learn to identify and eliminate these forms of toxicity.

In November 2021, OpenAI began the process of creating this safety system. They sent tens of thousands of snippets of text to an outsourcing firm in Kenya, Sama. The text was pulled from various internet sources, including extremely harmful content describing graphic situations of abuse, murder, and self-harm. Sama, a San Francisco-based company, employs workers in Kenya, Uganda, and India to label data for Silicon Valley clients like Google, Meta, and Microsoft. While it brands itself as an "ethical AI" company, there are concerning elements surrounding its operations.

Sama's data labellers, who were contracted to work on behalf of OpenAI, earned a take-home wage of approximately $1.32 to $2 per hour depending on seniority and performance. This rate was for work that involved labouring over harmful, potentially traumatising content.

## Anatomy of an AI System

"Anatomy of an AI System" is a large-scale map and long-form essay produced by Kate Crawford and Vladan Joler. The project aims to illustrate the complex network of resources, labour, and data required to create and operate a single AI system, in this case, the Amazon Echo.

The essay and map unravel the lifespan of an AI system, from resource extraction to its eventual disposal. Key themes include:

1. **Material resources**: The extraction of Earth's minerals used in the manufacturing of devices, as well as the environmental implications of these processes.
2. **Labour**: The often invisible human labour, such as precarious "ghost work", involved in the creation, maintenance, and disposal of AI systems.
3. **Data**: The extensive amount of personal data that AI devices collect from users, which further trains and enhances the AI.

The main conclusion is to emphasise that AI systems are not intangible or magical but are deeply rooted in Earth's geology and underwritten by human labor and ingenuity.

## Teaching AI Ethics

These "advanced level" AI Ethics activities use Project Zero thinking routines to explore the problem of human labour:

1. **Circle of Viewpoints Thinking Routine**: Students assume different roles or perspectives in the context of AI ethics and labor exploitation. For example, they might adopt the viewpoint of a tech CEO, a data labeller, an AI ethicist, a delivery driver, a consumer of AI products, and a policy maker. Each student, from their character's viewpoint, discusses their perspective on the issue, its impacts, and possible solutions.
2. **Zoom In Routine for Unseen Labour**: Present students with images that indirectly represent the impact of AI on human labour, such as a Google search results page, an Amazon product page, or a snapshot of an AI chatbot interaction. Introduce the concept of unseen labour in AI and explain how each image involves the contribution of countless unseen workers.
3. **Compass Points Routine on Proposed AI Regulations**: Propose a hypothetical regulation or policy that aims to improve the working conditions of people in the AI industry. Use the Compass Points routine: **E (Excited)**: positive outcomes; **W (Worried)**: concerns and unintended consequences; **N (Need to Know)**: additional information needed; **S (Stance)**: individual viewpoints.
`
  },
  {
    slug: 'teaching-ai-ethics-affect-recognition',
    title: 'Teaching AI Ethics: Affect Recognition',
    date: '2023-05-15',
    excerpt: 'Affect recognition claims to interpret human emotions by analysing facial expressions, body language, and speech patterns. The reliability and ethical implications make it one of the worst potential applications of AI in education.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'affect recognition', 'emotion recognition', 'facial recognition', 'surveillance'],
    series: '2023',
    coverImage: '/images/affect-recognition-surveillance.png',
    coverCredit: 'Reihaneh Golpayegani & DIGIT / betterimagesofai.org / CC-BY 4.0',
    content: `
As artificial intelligence continues to develop and influence different aspects of our lives, its role in education is becoming increasingly important. One particularly controversial implementation of AI is affect or emotion recognition, which claims to interpret human emotions and mental states by analysing facial expressions, body language, and speech patterns. Advocates for affect recognition argue that incorporating it into education can transform how students learn, enabling personalised and adaptive teaching methods. However, the reliability and ethical implications of this technology make it well worth further investigation.

## What is Affect Recognition?

Affect recognition, also known as emotion recognition, is a subfield of AI that aims to identify and interpret human emotions and mental states by analysing various cues, such as facial expressions, body language, and speech patterns. By leveraging machine learning algorithms and computer vision techniques, affect recognition systems attempt to classify emotions into categories such as happiness, sadness, anger, fear, surprise, and disgust.

The origins of affect recognition can be traced back to the early studies on facial expressions and emotions conducted by psychologist Paul Ekman in the 1960s. Ekman's work led to the development of the Facial Action Coding System (FACS) and the theory that certain facial expressions are universally linked to specific emotions. This notion has been the foundation for much of the affect recognition research that has since taken place.

Several technologies and developers have already attempted to incorporate affect recognition:

1. **Affectiva**: A software company that has developed an emotion recognition platform using computer vision and deep learning algorithms to analyse facial expressions in real-time, with applications in marketing, automotive, and gaming industries. Affectiva's partners include BMW, Boeing, and Lockheed Martin.
2. **Emotient**: Acquired by Apple in 2016, Emotient's technology used machine learning to analyse facial expressions in images and videos, for advertising purposes.
3. **Beyond Verbal**: This company focuses on emotion recognition through vocal intonations, focusing on customer service interactions, telemedicine, and voice assistants.

The controversy surrounding affect recognition primarily stems from the reliability and validity of the underlying theory. Critics argue that emotions are not universally expressed through facial expressions, as cultural and individual differences can heavily influence the way emotions are displayed. Recent studies have challenged the idea that specific facial expressions can be reliably linked to distinct emotions, suggesting that context plays a crucial role in interpreting emotional cues.

Another concern is the potential for bias in affect recognition algorithms, as they may not account for variations in facial structure, skin tone, neurodiversity, or cultural background. These biases can lead to misinterpretation and misclassification of emotions, raising ethical questions about the fair application of this technology.

## Case Study: Microsoft's Decision to Remove Emotion Recognition Services

Given the problematic nature of emotion recognition research, Microsoft decided to remove certain features from their Azure Face service, including capabilities that infer emotional states, gender, age, smile, facial hair, hair, and makeup.

In a 2022 blog post, Microsoft acknowledged the need for AI systems to be trustworthy and appropriate solutions to the problems they are designed to solve. In the case of emotion recognition, the company highlighted several concerns:

1. **Lack of scientific consensus**: Experts both inside and outside the company pointed out the absence of a universally accepted definition of "emotions". This lack of consensus makes it challenging to develop reliable and accurate emotion recognition systems.
2. **Generalisation challenges**: Emotion recognition technology faces difficulties in generalising its inferences across diverse use cases, regions, and demographics. This could result in misinterpretations or biases.
3. **Heightened privacy concerns**: The use of AI to analyse facial expressions and infer emotional states raises significant privacy concerns.

Microsoft's decision demonstrates some of the biggest concerns with affect recognition technologies. Deploying technologies which do not have a solid theoretical underpinning and which may seriously impact people's lives is clearly unethical. However, despite moves from big companies like Microsoft and IBM, the lure of emotion recognition continues to draw developers to produce products for education.

## Affect in Education

Here are some examples of how affect and emotion recognition is being pursued in education:

1. **BrainCo**: BrainCo has developed a headband called Focus1 which uses electroencephalography (EEG) technology to monitor students' brainwaves and assess their attention levels in real-time.
2. **Carnegie Mellon University's ArticuLab**: The ArticuLab has developed an AI-powered virtual tutor called Alex, designed to recognise and respond to students' emotions using natural language processing and facial expression analysis.
3. **The Affective Computing Group at MIT Media Lab**: The group has been conducting research on emotion recognition and its potential applications in various fields, including education.

## Teaching AI Ethics

**Activity 1: AI Ethics Debate**
Divide students into small groups, and assign each group a specific subject area. In their groups, students research and discuss the potential benefits and drawbacks of implementing affect recognition technology. Each group presents their findings and engages in a class-wide debate.

**Activity 2: AI Ethics Case Study Analysis**
Provide students with several case studies that highlight the use of affect recognition technology in different subject areas. In pairs or small groups, students analyse their assigned case study, focusing on the purpose and application, potential benefits and drawbacks, and ethical considerations.

**Activity 3: Designing an Ethical Affect Recognition System**
Divide students into small groups. Their task is to create a system that addresses the ethical concerns related to affect recognition, such as privacy, accuracy, and bias. As a class, address: Is it possible to develop a truly ethical affect recognition system?
`
  },
  {
    slug: 'teaching-ai-ethics-datafication',
    title: 'Teaching AI Ethics: Datafication',
    date: '2023-04-16',
    excerpt: '"Data is the new oil." Datafication describes how all aspects of our lives are being turned into data points — and it raises significant ethical concerns about privacy, surveillance, and misuse.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'datafication', 'data bias', 'privacy'],
    series: '2023',
    coverImage: '/images/data-glitch-binary.jpg',
    coverCredit: 'Elise Racine & The Bigger Picture / betterimagesofai.org / CC-BY 4.0',
    content: `
"Datafication" is a term used to describe how all aspects of our lives are being turned into datapoints. Whether through the collection of our likes, shares, and ratings on social media and streaming apps, or through the harvesting of physical data from devices like smartphones and smartwatches, datafication is what powers artificial intelligence.

## Case Study: The Datafication of Education

A study by Atlas VPN found that **98% of iOS educational apps gather user data**, with each app on average collecting information from over 8 data segments. This can include names, emails, phone numbers, location, payment information, and search history. Duolingo topped the list by collecting user data across 19 segments. Google Classroom collects data from 17 segments.

The primary purposes for collecting data were app functionality (86%), analytics (80%), personalisation (56%), and developer's advertising or marketing (54%). However, 24% of the apps also used collected data for third-party advertising.

## Where Does All the Data Go?

Companies gather large amounts of information for various reasons, and AI plays a significant role:

1. **Targeted Advertising**: AI algorithms analyse collected data to predict the most effective ads for each user, leading to intrusive and privacy-invading ad experiences.
2. **Competitive Research**: AI identifies gaps in the market or predicts future trends, but this can lead to aggressive competition or unethical business practices.
3. **Surveillance and Profiling**: AI processes vast amounts of data to create comprehensive user profiles, raising significant privacy concerns.
4. **Third-Party Data Sharing**: Companies share user data with data brokers, advertisers, or business partners without explicit consent.
5. **Unfair Competitive Advantages**: Companies with vast user data leverage AI to predict and influence behaviour, potentially creating monopolies.

## Teaching AI Ethics

- **History**: How does datafication impact the way we study and interpret historical events?
- **English**: How does datafication influence the way literature is analysed and interpreted?
- **Mathematics**: How has datafication transformed the study of mathematics and careers in maths?
- **Environmental Science**: How does datafication impact the study of environmental systems?
- **Visual Arts**: What are the ethical implications of using data-driven methods in artistic practice?
- **Geography**: What are the ethical considerations in using data-driven methods to analyse geographical information?
`
  },
  {
    slug: 'teaching-ai-ethics-truth-and-academic-integrity',
    title: 'Teaching AI Ethics: Truth and Academic Integrity',
    date: '2023-03-21',
    excerpt: 'AI hallucinations pose a genuine risk of causing harm, while the ease of generating human-like content raises profound questions about academic integrity and the spread of misinformation.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'truth', 'academic integrity', 'misinformation', 'disinformation'],
    series: '2023',
    coverImage: '/images/truth-telling-tales.png',
    coverCredit: 'Reihaneh Golpayegani / betterimagesofai.org / CC-BY 4.0',
    content: `
The concept of "truth" is a significant ethical issue related to AI systems like ChatGPT. Since its launch, there have been two main concerns: first, the likelihood of AI models generating false or fabricated content, and second, the potential for individuals to exploit them for dishonest purposes.

## Synthetic Mirages

"Hallucinating" is a result of many different factors:

1. **Training data limitations**: Models are trained on datasets which may include inaccuracies, biases, or outdated information.
2. **Inability to verify facts**: AI language models lack the ability to fact-check or verify information.
3. **Ambiguity in prompts**: Vague prompts may lead to inaccurate responses.
4. **Over-optimising for fluency**: Models may prioritise sounding plausible over being accurate.
5. **Lack of a ground truth**: AI models don't possess a deep, grounded understanding of the world.

AI hallucinations pose a genuine risk of causing harm. The convincingly fabricated information produced by these models can infiltrate media, academic research, and educational materials.

## Academic Integrity in the Age of AI

AI has become a potential threat to academic integrity, as tools like ChatGPT make it easier for students to access and use generated content for cheating purposes. The responsibility falls on educators, institutions, and AI developers to create a culture that emphasises the importance of truth and the ethical use of technology.

## AI and Truth

Misinformation, disinformation, and mal-information are false or misleading pieces of information that spread through social media, news outlets, or word of mouth. AI has become an accomplice in the viral spread of these types of information. Deepfakes can deceive users with startling accuracy, and AI-powered algorithms create "filter bubbles" that amplify false narratives.

## Case Study: Language Models and the Spread of Fake News

Research conducted by Georgetown University, OpenAI, and Stanford Internet Observatory highlights the dangers of large language models and the potential for them to manipulate public viewpoints. The researchers used the ABC model of disinformation: **A**ctor (who creates it), **B**ehaviour (strategies to spread it), and **C**ontent (the false information itself).

LLMs can overflow the internet with false information at minimal cost, making manipulation harder to detect. The researchers recommend careful attention to the type and source of news.

## Teaching AI Ethics

- **History**: How might the use of AI impact historical research and the spread of fake historical information?
- **English**: What role does AI play in the creation and dissemination of fake news?
- **Mathematics**: How can AI be used to detect errors in data analysis, and what ethical considerations apply?
- **Computer Science**: How can AI be used to detect plagiarism, and how can we design ethical AI systems?
- **Science**: How can AI detect and prevent scientific misconduct?
- **Media Studies**: How can we teach students to critically evaluate and fact-check information?
- **Visual Arts**: Is AI art actually art, or is it plagiarism?
`
  },
  {
    slug: 'teaching-ai-ethics-environment-2023',
    title: 'Teaching AI Ethics: Environment',
    date: '2023-03-13',
    excerpt: 'The environmental concerns of artificial intelligence are less reported on than algorithmic bias, but just as important. AI is an extractive technology with hidden costs in energy, mining, and carbon emissions.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'environment', 'climate change', 'data centres', 'energy'],
    series: '2023',
    coverImage: '/images/environment-data-centers.jpg',
    coverCredit: 'Gloria Mendoza / betterimagesofai.org / CC-BY 4.0',
    content: `
Kate Crawford, researcher, author, and leading AI scholar, refers to Artificial Intelligence as an "extractive" technology. In her book *Atlas of AI* she compares the AI industry to mining, drawing comparisons between oil and precious metal extraction.

## Extractive AI

The use of rare earth minerals and metals in the manufacturing of electronic components is a crucial aspect of the development of AI. These materials are used in the production of components such as batteries, memory chips, and processors. Lithium, for example, is a key component in the production of batteries used in devices such as smartphones, laptops, and electric cars. Similarly, cobalt is a vital component of rechargeable batteries, while copper is essential for wiring and other electrical components.

However, the extraction and refining of these materials are resource-intensive processes that have significant environmental impacts. The mining of rare earth minerals and metals can result in soil erosion, deforestation, and water pollution. It can also lead to the displacement of local communities and the destruction of their habitats. The production of electronic components also generates a significant amount of greenhouse gas emissions, contributing to climate change.

The demand for these materials is expected to increase dramatically as AI technologies continue to develop and become more widespread. This increase in demand will only exacerbate the environmental impact of their extraction and use.

## The Hidden Costs of the Cloud

Cloud computing relies on massive data centres and infrastructure that consume a significant amount of energy and produce waste. These data centres require constant cooling, lighting, and other support systems. The construction and operation of data centres also require huge amounts of energy, water, and other resources, leading to carbon emissions and other forms of environmental damage.

One of the most significant environmental impacts of cloud computing is its contribution to climate change. According to one estimate, the carbon footprint of the IT industry is 1.8% to 3.9% of global greenhouse-gas emissions.

Many companies have pledged to make their data centres carbon-neutral or powered by renewable energy sources, but critics argue that these efforts are not enough. Offsetting carbon emissions or engaging in carbon trading does not address the underlying problem of energy consumption and waste production.

## Case Study: The Carbon Cost of Training Large Language Models

Large language models are powerful AI systems that can generate natural language texts for various applications. Unfortunately, training these models requires a huge amount of computational resources and energy, which has a significant environmental impact.

According to a study by researchers at the University of Massachusetts Amherst, training a single LLM can emit as much carbon as five cars in their lifetimes. The study estimated the energy consumption and carbon footprint of four popular LLMs: Transformer, ELMo, BERT, and GPT-2. The results showed that the most energy-intensive model, Transformer, consumed 656,347 kWh of electricity and emitted 626,155kg of CO2 equivalent. This is equivalent to "nearly five times the lifetime emissions of the average American car".

Organisations like Microsoft, OpenAI, and Google are investigating ways to reduce this impact, including choosing more efficient models, using pre-trained models or transfer learning, reducing the frequency of training sessions, using renewable energy sources, and implementing best practices for data collection and processing.

## Teaching AI Ethics

- **Legal Studies**: What laws and regulations exist to govern the use of AI in environmental contexts? How can they be improved to better protect the environment?
- **Environmental Science**: How can AI be used to address environmental challenges such as climate change, pollution, and deforestation? What ethical considerations should be taken into account?
- **Mathematics**: How can algorithms and machine learning be used to model and predict the impact of human activities on the environment?
- **Social Studies**: How does environmental degradation disproportionately affect different communities, particularly marginalised and vulnerable groups?
- **Engineering**: How can engineering principles be used to design environmentally sustainable AI systems?
- **Business and Economics**: How can AI be used to promote sustainable business practices and reduce the environmental impact of industries?
- **Health and PE**: How can AI be used to address public health issues related to the environment, such as air and water pollution?
- **English and Literature**: How can we use literary criticism like ecocriticism to analyse representations of AI in literature and popular culture?
`
  },
  {
    slug: 'teaching-ai-ethics-bias-2023',
    title: 'Teaching AI Ethics: Bias and Discrimination',
    date: '2023-03-06',
    excerpt: 'Algorithmic bias occurs when the data used to train AI systems reflects the biases and prejudices of society, resulting in discriminatory outputs. Large Language Models like GPT are almost unavoidably biased.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'algorithmic bias', 'discrimination', 'predictive policing', 'facial recognition'],
    series: '2023',
    coverImage: '/images/bias-binarisation.png',
    coverCredit: 'Beckett LeClair / betterimagesofai.org / CC-BY 4.0',
    content: `
While AI can undoubtedly be a valuable tool in education, it is important for educators to understand the ethical concerns that surround its use. We must ensure that we are using these technologies in ways that are responsible, just, and fair.

## Algorithmic Bias

One of the most pressing ethical concerns of AI is **algorithmic bias**. Algorithmic bias occurs when the data used to train AI systems reflects the biases and prejudices of society, resulting in discriminatory outputs.

ChatGPT is a prime example of an AI system that can suffer from algorithmic bias. It is a large language model that is trained on a massive dataset, including the "common crawl" which contains over 12 years' worth of web pages. While these datasets give the models tremendous capabilities, they are inherently biased. Indiscriminately scraping the internet for data means that the dataset can contain racist, sexist, ableist, and otherwise discriminatory language. As a result, ChatGPT can produce outputs that perpetuate these biases and prejudices.

Moreover, AI models can reflect the biases and prejudices of society as a whole. Just like any other society, the online community underrepresents marginalised groups and overrepresents others. The prevalence of racism and bigotry on sources like Reddit and Twitter can bleed through the datasets and be reproduced in the output of AI models.

Algorithmic bias can also occur during the methods of training and reinforcement used when developing AI systems. For example, predictive policing systems used by law enforcement agencies in the US disproportionately target poor, Black, and Latinx communities, reinforcing existing systemic biases.

## Discrimination by Default

These biases and harmful outputs do not just happen on occasion. It seems that Large Language Models like OpenAI's GPT are almost unavoidably biased. The tremendous volume of discriminatory, gendered, racist, and ableist language in the dataset means that models have a tendency to discriminate by default.

There are some organisations and communities trying to counteract this seemingly inevitable tendency. BLOOM, for example, is a model trained by BigScience through a "crowdsourced" dataset which had ethical guardrails in place from its inception, including avoiding potential biased datasets. This dataset is called ROOTS, 1.61 terabytes of text including 46 languages.

Unfortunately, although BLOOM may be *less* biased than GPT, the jury is out on whether the bias has been removed entirely. BLOOM is also significantly less powerful than a model like GPT or Google's LaMDA, and so it is less likely that people will use it as the basis for their own software.

## Case Study: Predictive Policing in the US

Predictive policing is the use of data analysis, machine learning, and artificial intelligence to predict where crimes are most likely to occur and who is most likely to commit them.

It is used by law enforcement agencies to allocate resources and personnel, identify potential criminal suspects, and prevent crime before it happens. However, there are concerns about the potential for bias and discrimination in predictive policing algorithms, as well as questions about the legality and ethics of using AI to predict criminal behaviour.

Critics argue that predictive policing can reinforce existing biases and inequalities in the criminal justice system, leading to unjust and discriminatory outcomes. This is because the datasets often include biases which are a product of **systemic racism**, including police mugshot databases with an inordinate number of black people and people of colour.

In August 2016, a coalition of 17 organisations, including the American Civil Liberties Union (ACLU), issued a statement expressing concern about predictive policing tools used by law enforcement. The statement highlighted the technology's racial biases, lack of transparency, and other flaws that lead to injustice, particularly for people of colour.

The statement called for transparency about predictive policing systems, evaluation of their short- and long-term effects, monitoring of their racial impact, and the use of data-driven approaches to address police misconduct. It also emphasised the importance of community needs and the potential of social services interventions.

Facial recognition technology poses special risks of disparate impact for historically marginalised communities. Recent studies demonstrate that these technical inaccuracies are systemic and biased against people with darker skin. There remains an ethical question of if or when it is appropriate to use facial recognition to address legitimate security concerns, regardless of its accuracy.

## Teaching AI Ethics

- **Legal Studies**: What legal precedents exist for protecting marginalised groups from discrimination? Is a biased algorithm legal?
- **English and Literature**: How have certain groups been silenced or oppressed throughout history? What is the implication of this "gap" in the written record of the internet when it is used as data to train an AI?
- **Mathematics**: What is an algorithm? How do algorithms and probability link to policing and other societal functions?
- **Social Studies**: How does systemic bias and discrimination affect different groups in society? How can AI perpetuate or challenge these biases?
- **Computer Science**: How can AI models be designed to avoid algorithmic bias and discrimination? What ethical considerations should be taken into account?
- **Philosophy**: What ethical theories can be applied to the use of AI in society? How can we balance the benefits and risks of AI?
- **Science**: How can data collection and analysis be used to address bias and discrimination in AI systems?
- **Business and Economics**: How does bias and discrimination in AI affect the market and business outcomes?
- **Media Studies**: How do media representations of different groups contribute to bias and discrimination in AI?
- **Psychology**: How does bias and discrimination affect individuals and society? How can we design AI systems that account for implicit bias?
- **Health and PE**: How might AI be used in healthcare and what are the potential ethical implications? How might AI discriminate against people in the healthcare system?
`
  },
  {
    slug: 'teaching-ai-ethics-privacy-2023',
    title: 'Teaching AI Ethics: Privacy',
    date: '2023-04-10',
    excerpt: 'AI systems are often "black boxes", making it hard to understand how they arrive at their decisions. The use of personal data in AI training data and the potential for data breaches pose significant privacy risks.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'privacy', 'GDPR', 'personal data', 'defamation'],
    series: '2023',
    coverImage: '/images/privacy-surveillance.png',
    coverCredit: 'Reihaneh Golpayegani & Digit / betterimagesofai.org / CC-BY 4.0',
    content: `
There are growing concerns about the impact of Artificial Intelligence technologies on our privacy. AI systems are often "black boxes", making it hard to understand how they arrive at their decisions and raising questions about transparency.

The use of personal data in AI training data and the potential for data breaches and cyber attacks also pose significant privacy risks to individuals and organisations. AI systems can perpetuate biases and have unintended consequences that violate individual privacy rights.

## Where Does All That Data Come From?

Developers of large language models, such as ChatGPT, often scrape their training data indiscriminately from the web without paying any attention to individual rights. These models are trained on vast swathes of internet data, and often include personal information that has been collected without consent or used in violation of privacy laws. This has raised concerns about the ethical implications of developing AI models that rely on data collected without regard for individual privacy rights.

The lack of transparency and accountability around the collection and use of personal data in AI development has been a longstanding issue. The vast amount of data required to train these models means that personal information is often collected without explicit consent or knowledge of the individuals affected. Critics argue that developers of large language models prioritise the creation of powerful algorithms over individual privacy rights, and that the industry is not sufficiently regulated.

These concerns have landed OpenAI in trouble with European regulators, particularly under the General Data Protection Regulation (GDPR) laws. The Italian regulator issued a temporary emergency decision demanding that OpenAI stop using the personal information of millions of Italians included in its training data, citing a lack of legal justification. The GDPR rules protect the data of over 400 million people across Europe, and apply to personal data that is freely available online.

In the US, the federal privacy commission also investigated OpenAI following a claim made against the company that it has been unlawfully using personal and private data.

## Protecting Personal Privacy

AI systems have the potential to perpetuate and amplify biases in data, leading to discrimination against certain groups or individuals. This is a serious concern when it comes to privacy, as these biases can lead to the exclusion or mistreatment of individuals based on their personal characteristics. It can lead to members of the public being surveilled based on skin colour, place of residence, or other factors which are part of the data used when training the models.

The storage of personal data in AI training data is also a significant privacy concern. Data breaches and cyber attacks are a huge risk for AI systems. OpenAI experienced a breach due to a bug in one of their code libraries which revealed the first and last names and email addresses of ChatGPT Plus subscribers, along with financial details.

## Case Study: AI Defamation

Artificial intelligence has the potential to generate false information, leading to serious privacy concerns. In a case in Hepburn Shire, Australia, OpenAI faced the possibility of legal action for defamation. ChatGPT incorrectly described regional mayor Brian Hood as a guilty party in a foreign bribery scandal. The mayor was actually a whistleblower who had reported the bribe payments.

ChatGPT's errors arose from its indiscriminate data-scraping, as well as the inability of these models to distinguish between true and false claims. Although OpenAI has taken some steps to protect people's privacy, such actions may not be sufficient to prevent the spread of false information.

This case highlights the legal challenges associated with suing AI companies for defamation, particularly given the issue of jurisdiction. When personal user data, even publicly available data, is combined with a language model's capacity for generating falsehoods, we have a recipe for damaging output.

## Teaching AI Ethics

- **Legal Studies**: How do GDPR laws protect user privacy when it comes to AI? What legal consequences can organisations face for non-compliance or data breaches?
- **English and Literature**: How has literature portrayed Artificial Intelligence and our concerns about these technologies? What can we learn from these portrayals about public sentiment towards privacy concerns?
- **Mathematics**: How do encryption algorithms protect personal data? What is the role of probability in securing data privacy and preventing data breaches?
- **Computer Science**: What methods can be implemented to ensure data privacy and security in AI systems? How can anonymisation techniques help in protecting user privacy?
- **Philosophy**: How can we balance the benefits of AI and the need for privacy? What ethical theories can be applied to address privacy concerns?
- **Science**: How can scientific research contribute to the development of more secure AI systems?
- **Business and Economics**: How do privacy concerns and regulatory compliance affect the market and business outcomes? What economic incentives exist for companies to invest in privacy?
- **Health and PE**: How can AI be used in healthcare while maintaining patient privacy? What are the potential ethical implications of privacy breaches in the healthcare system?
`
  },
  {
    slug: 'teaching-ai-ethics-copyright-2023',
    title: 'Teaching AI Ethics: Copyright',
    date: '2023-04-04',
    excerpt: 'Copyright is a hugely contentious aspect of the current wave of AI, particularly in image generation. Questions about ownership, intellectual property, and artist rights remain unresolved.',
    categories: ['AI', 'Ethics'],
    tags: ['AI ethics', 'copyright', 'intellectual property', 'image generation'],
    series: '2023',
    coverImage: '/images/copyright-horizon.jpg',
    coverCredit: 'Wesley Goatley & BRAID / betterimagesofai.org / CC-BY 4.0',
    content: `
Copyright is a hugely contentious aspect of the current wave of Artificial Intelligence, particularly in the field of AI image generation. As AI continues to advance and both artists and laypeople produce creative works, questions are cropping up about who owns the copyright to those works.

## Copyright and Image Generation

AI image generation has been the most public and most contentious aspect of AI and copyright. The primary reason is based on how these models are trained. In order to build an AI image generator, the developer must use millions or even billions of images. Stable Diffusion, for example, was trained on around 2.3 billion images. Many of these images have been "scraped" from the internet without the consent of the original creators.

This leads to problems with attribution, and with the potential for AI image generators to reproduce art in another artist's style. It also applies to living artists and photographers whose work has been scraped from sites like ArtStation and Flickr.

There is the additional problem of whether the current copyright laws extend to work created "by a machine". Although AI images are generated by a human controlling the input via the prompt, it has been argued that the actual image is created by the AI, and not the human.

US law states that intellectual property can be copyrighted only if it was the product of human creativity, and the Copyright Office only acknowledges work authored by humans. Machines and generative AI algorithms, therefore, cannot be authors, and their outputs are not copyrightable.

## Writing, Film, and Music

Although the bulk of the conversation around AI and copyright has centred on the visual arts, the conversation has also arisen in text generation, film, and music.

The same human authorship requirement for copyright protection under the current US law means that AI-generated writing is likely either a public domain work immediately upon creation or a derivative work of the materials the AI tool was exposed to during training.

AI can already synthesise realistic versions of existing artists' voices, and with AI-generated film technologies around the corner, more contentious debates are coming.

## Case Study: Zarya of the Dawn

In February 2023, the US Copyright Office revoked copyright protection for images created using the AI-powered Midjourney image generator for the comic book "Zarya of the Dawn" and issued a new copyright registration covering only the text of the work and the *arrangement* of images and text. The justification was incomplete information in the original copyright registration, which failed to disclose that the images were created by an AI model.

The Copyright Office argued that the images generated by Midjourney were not the product of human authorship and thus not copyrightable. Despite the creator's claim that she had "guided" the structure and content of each image, the Copyright Office rejected the argument.

The creator reacted by framing it as an overall win for AI-augmented artists. The ruling protects the comic book's story and the image arrangement. However, individual images produced by Midjourney were not granted copyright.

The decision means that AI-generated imagery, without human-authored elements, cannot currently be copyrighted in the United States.

## Teaching AI Ethics

- **Legal Studies**: What is the current legal stance on AI copyright in your country?
- **English and Literature**: How does the use of AI to generate content challenge traditional notions of authorship and creativity, and what are the ethical implications?
- **Computer Science**: What ethical considerations should be taken into account when designing AI systems for copyright enforcement?
- **Philosophy**: What ethical theories can be applied to the use of AI in copyright enforcement?
- **Business and Economics**: How does the use of AI affect the market for creative works, and what ethical issues arise?
- **Media Studies**: What implications might AI have on the creation and copyrighting of film?
- **Visual Arts**: How does the use of AI in creating art raise questions about copyright and intellectual property rights?
- **Music**: Is it possible to copyright an artist's voice?
`
  },
  {
    slug: 'teaching-ai-ethics-overview',
    title: 'Teaching AI Ethics',
    date: '2023-01-26',
    excerpt: 'The original overview of nine ethical considerations for AI in education, from beginner to advanced levels. Bias, environment, truth, copyright, privacy, datafication, affect recognition, human labour, and power.',
    categories: ['AI'],
    tags: ['AI', 'AI ethics', 'education', 'ChatGPT', 'ethics', 'bias', 'environment', 'copyright', 'privacy', 'human labour', 'power'],
    series: '2023',
    coverImage: '/images/overview-two-cultures.jpg',
    coverCredit: 'Zoya Yasmine & Cambridge Diversity Fund / betterimagesofai.org / CC-BY 4.0',
    content: `
As we head into the start of Term 1 it is already looking like Artificial Intelligence is going to be one of the most talked about issues in the classroom. Much of the narrative around models like OpenAI's ChatGPT has centred on students using it to cheat on assignments. But many schools are much more interested in the potential of these technologies to help, rather than hinder in education.

As much as there is enjoyment in working with the technology, it has many flaws. It is our responsibility to discuss the ethical considerations of AI with our students. AI ethics goes beyond the well-documented "algorithmic bias" that results in language models like ChatGPT producing racist and sexist output. In this article, I explore nine ethical considerations ranging from "beginner" to "intermediate" and "advanced" levels.

The levels reflect how easy it is to access information and resources on the particular ethical concern, and how likely the concepts are to already fit within your curriculum. As you move through the levels you and your students will be required to understand and apply increasingly complex concepts and terminology.

# Beginner

## Bias

Artificial Intelligence comes in many forms, but all require data. ChatGPT, for example, is a large language model that is trained on a huge dataset which includes the "common crawl": a text-based database of over 12 years' worth of web pages. These datasets give the models tremendous capabilities, but they are also inherently biased. Indiscriminately "scraping" the internet lets in the bad along with the good, meaning that the dataset can contain racist, sexist, ableist, and otherwise discriminatory language.

Unfortunately, AI large language models hold up a mirror to internet society, and the reflection is not pretty. Like other societies, the online community underrepresents marginalised groups, and overrepresents others. The prevalence of racism and bigotry on sources like Reddit and Twitter can bleed through the datasets and be reproduced in the output.

Bias can also come from the methods of training and reinforcement used when developing the AI systems. For example, police in the US have used systems for "predictive policing" which use algorithms to predict people likely to commit crimes. These algorithms disproportionately target poor, Black, and Latinx communities, reinforcing existing systemic biases.

**Subject examples:**
- Humanities (Legal Studies): What legal precedents exist for protecting marginalised groups from discrimination? Is a biased algorithm legal?
- English and Literature: How have certain groups been silenced or oppressed throughout history? What is the implication of this "gap" in the written record of the internet?
- Mathematics: What is an algorithm? How do algorithms and probability link to policing and other societal functions?

## Environmental Impact

The technology industry as a whole has an enormous impact on the environment. Most devices incorporate metals like lithium and rare earth minerals which are in short supply and costly to extract. The mining and refining of these products adds to the environmental impact, including soil erosion, water pollution, and greenhouse gas emissions.

AI computing is increasingly carried out in "the cloud". Cloud services sound ethereal and temporary, but the name hides the physical reality of the technology. Cloud computing relies on huge data centres and infrastructure, all of which consumes energy and produces waste.

Although many major companies such as Google, Microsoft, and Meta have pledged to make their data centres carbon neutral, in reality this often means engaging in carbon-trading or offsetting schemes rather than actually reducing the amount of waste or environmental damage. This "greenwashing" is heavily criticised.

**Subject examples:**
- Humanities (Geography): What is the impact of the climate crisis on different global populations? Which parts of society are responsible for the most emissions due to AI technologies?
- Science: Why does computing use so much energy and produce so much waste heat? What is the impact on the environment?
- Design and Technology: How might we design more sustainable systems for the manufacturing of AI technologies?

## Academic Integrity and "Truth"

Academic integrity has been by far the biggest potential issue of AI covered in the media. There have been widespread fears that students will use language models like ChatGPT to write essays, answer questions, and cheat on assignments.

It is still unclear to what extent using an AI constitutes "cheating". It is not, strictly speaking, plagiarism as the output of the model is not copied from another source. Rather, the output is an original creation which is generated "probabilistically". Knowing where to draw the line raises ethical questions about academic integrity and honesty.

As well as cheating, there are concerns that AI will be used to produce massive amounts of "fake news" or deliberately harmful media. This may be unintentional, as one of the biggest current flaws of most language models is that they can generate very convincing lies. Or, people may use these technologies maliciously to spread political misinformation.

**Subject examples:**
- English: If an AI can write an essay, what is the point of writing essays? How do essays help us to build knowledge and not just demonstrate it?
- Religion: What are the ethical and moral implications of academic integrity?
- Humanities (Legal Studies): Is using an AI to write an essay cheating? Is using an AI a form of contract cheating?

# Intermediate

## Copyright and Intellectual Property

Copyright issues have been particularly prevalent in AI image generation. AI image generators like Stable Diffusion, DALL-E 2, and Midjourney are trained on images "scraped" from the internet. This has resulted in artists' "styles" being used in AI image generation without their permission. Many artists believe that this infringes their intellectual property rights.

Large language models like ChatGPT also incorporate huge amounts of other writers' work. Prompting a language model to write something *in the style of* another author could be viewed the same way as an image generator adopting another artist's style.

There are also question marks over who owns the copyright to materials produced by AIs.

**Subject examples:**
- Visual Arts: Is it art? If a user can generate an image in the style of another artist, does the digital output count as "real art"?
- Performing Arts: Some AI models can produce music and lyrics. Is it possible to create a complete AI performing artist?
- English: Does producing a piece of writing in the style of another author infringe their intellectual property rights?

## Privacy and Security

Privacy is a major concern in the development and use of AI systems. There are increasing concerns about the collection and use of personal data, data breaches, and the lack of transparency in AI decision-making.

One of the most prominent examples is the use of facial recognition technology. This technology has been criticised for its potential to violate individuals' privacy and civil rights. Facial recognition systems have been known to have higher error rates for people with darker skin tones, and have been used to target and monitor marginalised communities.

Another example is targeted advertising. AI-powered algorithms analyse data on individuals' online activities to deliver targeted ads, raising concerns about data privacy and the use of personal data for commercial gain.

**Subject examples:**
- Humanities (Legal Studies): What is the impact of AI on data protection laws such as GDPR?
- Mathematics: How can we analyse the data sets used by AI systems for potential biases and privacy issues?
- Health and Physical Education: What are the privacy concerns surrounding personal health data and its use in AI-powered healthcare?

## Data Collection and "Datafication"

"Datafication" is a term used for turning all parts of our life into a data point to be fed into an AI algorithm. From location data to health data, shopping habits, likes, clicks, and views, almost every interaction with technology is fed into an algorithm somewhere.

As we become commodities, we open ourselves up to exploitation. One major ethical concern with "datafication" is that users become the products, and the free-labour of the users is used to generate capital for the platform owners.

"Big Data" also contributes to many of the issues already described, including bias and discrimination. Because not everyone in the world has access to these technologies, that worldview is by definition missing some very important data.

**Subject examples:**
- Humanities (History): What is the historical and societal context of data collection and the impact of datafication on different communities?
- Design and Technology (Digital Technology): How can we design ethical data collection practices and data privacy measures?
- English: How might we critically analyse datafication and its implications on privacy?

# Advanced

## Affect Recognition

Affect recognition means interpreting a person's emotions through their facial expressions, body language, speech patterns and actions. It is a controversial practice that has been widely criticised for poor research methodologies and inconsistent results.

Despite these controversies, affect recognition is an industry worth billions of dollars and has already made its way into education. A system named 4 Little Trees, developed in Hong Kong, claimed to be able to monitor children's facial expressions and assign labels for emotions such as "happy", "sad", and "angry".

Affect recognition is problematic on a number of levels. As well as the question mark over its accuracy, many people question whether emotions should be "datafied" at all. There are privacy concerns, and affect recognition technology can perpetuate discrimination.

## Human Labour

The ethical concern of AI and human labour is a two-sided coin. On the one hand there are always fears that machine automation will replace jobs. On the other is the fact that current AI systems actually rely on a tremendous amount of dangerous, low-paid human labour.

Hidden beneath the rhetoric of the jobs AI will destroy is an unseen narrative of the jobs it currently requires to function. A recent article by Time magazine explored the harsh conditions of the Kenyan workers employed by OpenAI to label inappropriate data for its language model. Working for less than $2 an hour, these labourers were partly responsible for training an AI algorithm to identify harsh language, graphic, sexual, and violent content.

**Subject examples:**
- Humanities (History): What is the history of the "robots taking our jobs" argument?
- Humanities (Economics): What is the potential impact of AI on employment and the labour market?
- Science (Psychology): What is the psychological impact of low-paid labor on workers and the potential for trauma?

## Power and Hegemony

Because the data AI models are built on is "frozen in time", it represents a static worldview which encodes existing power and hierarchies in society. The reinforcement of the hegemony can further oppress and marginalise already disadvantaged people.

Think of AI as a self-perpetuating cycle. The datasets encode a certain power structure into the model, often the dominance of a heterosexual, white, Western, male perspective. This is then reflected in the output, which may be used to train future models.

AI also reinforces global hegemonies both in political and corporate terms. Countries and organisations need access to wealth, energy, and resources to successfully train and scale up AI models. This means that powerful AI is increasingly concentrated in the hands of those who already have the most.

**Subject examples:**
- Humanities (Geography): Explore the global distribution of wealth, energy, and resources in relation to AI development.
- Mathematics: Explore the statistical analysis of AI-generated data, including the detection and measurement of biases.
- English and Literature: How can a Marxist critical perspective illuminate some of the problems of AI and power?

# Ethical Perspectives, Approaches, and Frameworks

## Ethical Perspectives

There are many ethical perspectives which could be applied to AI. Terry Bynum's principles of virtue ethics and human flourishing, translated from Aristotle into modern times, offer a useful starting point:

1. Being happy and healthy is important for doing the right thing
2. People need other people to be happy and healthy
3. To be happy and healthy, people need to do what they are good at
4. To know what is right, people need to learn and think for themselves
5. Making good choices is key to doing what is right

## Ethical Guidelines

Here are several examples of guiding principles used in AI ethics:

**EU High-Level Expert Group on Artificial Intelligence:**
1. Human agency and oversight
2. Technical robustness and safety
3. Privacy and data governance
4. Transparency
5. Diversity, non-discrimination and fairness
6. Social and environmental wellbeing
7. Accountability

**Google:**
1. Be socially beneficial
2. Avoid creating or reinforcing unfair bias
3. Be built and tested for safety
4. Be accountable to people
5. Incorporate privacy design principles
6. Uphold high standards of scientific excellence
7. Be made available for uses that accord with these principles

**Australian AI Ethics Principles:**
1. Human-centred values
2. Fairness
3. Privacy protection and security
4. Reliability and safety
5. Transparency and explainability
6. Contestability
7. Accountability

## "Ethics Washing"

Just because organisations develop AI Ethics or Responsible AI principles does not mean they follow them. Just like the "greenwashing" of environmental concerns, many AI companies have been accused of paying lip-service to ethical concerns. AI Ethics principles are often non-binding and cannot be enforced by law.

# Conclusion

We are at a watershed moment in terms of Artificial Intelligence. Beyond the narrative of cheating and dramatic claims of the end of industrial-era education, AI offers real opportunities to personalise learning and help with differentiation, diversity, and inclusion. But there is a shadow side to AI which cannot be ignored.

## Teaching AI Ethics: Suggested Activity

**Activity Title: "Ethical Decision Making in AI"**

- **Learning Intention 1:** Students will understand the importance of ethical decision making in the development and implementation of AI technology.
- **Learning Intention 2:** Students will be able to identify and analyse potential ethical issues in a given AI scenario.

**Activity Description:**
1. Introduce the concept of ethical decision making in AI and its importance.
2. Divide the class into small groups and provide each group with a different AI scenario (e.g. facial recognition in law enforcement, self-driving cars, AI-powered virtual assistants).
3. Each group brainstorms potential ethical issues that may arise from the implementation of the AI technology in their scenario.
4. Each group presents their findings to the class and engages in a class discussion.
5. As a class, generate a list of best practices for ethical decision making in AI development and implementation.
6. As an extension, students can research real-life cases where ethical issues have arisen in AI.

## Resources and Further Reading

### Books
- Kate Crawford, *Atlas of AI*
- Virginia Eubanks, *Automating Inequality*
- Shoshana Zuboff, *The Age of Surveillance Capitalism*
- James Barrat, *Our Final Invention*
- Nick Srnicek, *Platform Capitalism*
- Mark Andrejevic, *Automated Media*
`
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(p => p.categories.includes(category));
}

export function getPostsBySeries(series: string): Post[] {
  return posts.filter(p => p.series === series);
}

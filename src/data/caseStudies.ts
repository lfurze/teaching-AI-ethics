export interface CaseStudy {
  title: string;
  slug: string;
  summary: string;
  sourceArticle: string;
  topic: string;
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'OpenAI and Sama: The Workers Who Made ChatGPT "Safe"',
    slug: 'openai-sama-kenyan-workers',
    summary: 'TIME magazine revealed that OpenAI contracted Kenyan workers through Sama to label toxic content for ChatGPT safety systems. Workers earned $1.32 to $2 per hour reading horrific material, despite OpenAI believing they were paying $12.50 per hour.',
    sourceArticle: 'teaching-ai-ethics-2026-human-labour',
    topic: 'human-labour',
    content: `The story that brought AI labour exploitation to global attention was TIME magazine's January 2023 investigation into OpenAI's use of Kenyan workers to make ChatGPT less toxic.

GPT-3 had a significant problem: it was prone to producing violent, sexist, and racist output. To address this, OpenAI needed to build a safety system. OpenAI contracted this work to Sama, a San Francisco-based company that employs workers in Kenya, Uganda, and India.

Beginning in November 2021, Sama workers in Nairobi were sent snippets of text describing the most horrific content imaginable. They were paid between $1.32 and $2 per hour to read this material, label it, and feed it back to OpenAI.

As one worker told TIME: "That was torture. You will read a number of statements like that all through the week. By the time it gets to Friday, you are disturbed from thinking through that picture."

Critically, OpenAI told reporters it believed it was paying Sama contractors $12.50 per hour. Workers say they actually received approximately $1 to $2 per hour, sometimes less.`,
  },
  {
    title: 'Scale AI and Remotasks: The Billionaire\'s Sweatshop',
    slug: 'scale-ai-remotasks',
    summary: 'Scale AI, valued at $13.8 billion, scored just 1 out of 10 on fair labour practices. Its subsidiary Remotasks abruptly shut down operations in multiple countries, stranding thousands of workers.',
    sourceArticle: 'teaching-ai-ethics-2026-human-labour',
    topic: 'human-labour',
    content: `Scale AI, valued at $13.8 billion in 2024, has partnered with OpenAI, Meta, Google, Microsoft, and the US Department of Defense. The company operates through subsidiaries including Remotasks and Outlier.

The Fairwork project found Remotasks scored just 1 out of 10 on fair labour practices. In March 2024, Remotasks abruptly shut down operations in Kenya, Nigeria, and Pakistan with minimal notice, stranding thousands of workers.

In January 2025, Scale AI was sued in US federal court by contractors alleging the company violated worker safety laws by exposing them to emotionally distressing content.`,
  },
  {
    title: 'Meta, TikTok, and Content Moderation in Kenya',
    slug: 'meta-tiktok-content-moderation',
    summary: 'Daniel Motaung, a Facebook content moderator in Nairobi, became a key whistleblower after developing severe PTSD. Over 140 Kenyan content moderators were diagnosed with severe PTSD, and the case against Meta proceeded to trial in 2024.',
    sourceArticle: 'teaching-ai-ethics-2026-human-labour',
    topic: 'human-labour',
    content: `Daniel Motaung, a South African who worked as a Facebook content moderator for Sama in Nairobi, became a key whistleblower. He described being exposed to graphic violence from his first day on the job. He developed severe PTSD. When he tried to organise his colleagues into a union, he was fired.

In May 2022, Motaung sued Meta and Sama in Kenyan courts. In September 2024, the Kenyan Court of Appeal ruled against Meta, allowing the case to proceed to trial. A 2024 report found that more than 140 of the Kenyan content moderators involved had been diagnosed with severe PTSD.`,
  },
  {
    title: 'AI Conversations Become Advertising Gold',
    slug: 'chatgpt-advertising',
    summary: 'A leak from ChatGPT\'s Android app beta suggested OpenAI is preparing to introduce advertisements into ChatGPT, raising questions about hyper-personalised advertising based on users\' deepest thoughts and emotional states.',
    sourceArticle: 'teaching-ai-ethics-data-2025',
    topic: 'data',
    content: `In late November 2025, a leak from ChatGPT's Android app beta suggested OpenAI is preparing to introduce advertisements into ChatGPT. Code references to an "ads feature" with "bazaar content," "search ad," and "search ads carousel" were discovered.

As one commentator noted, "GPT likely knows more about users than Google." Through extended conversations, OpenAI stores data about users' jobs, interests, problems, aspirations, relationships, health concerns, and personal circumstances. This creates opportunities for "hyper-personalized advertising" \u2014 ads tailored not just to demographics or browsing history, but to your deepest thoughts and current emotional state.

For students and educators, this raises critical questions about trust and manipulation. If an AI tutor can be monetised through advertising, how do we know its recommendations are not influenced by commercial interests?`,
  },
  {
    title: 'Italy Fines OpenAI for GDPR Violations',
    slug: 'italy-openai-gdpr',
    summary: 'Italy\'s data protection authority imposed a 15 million euro fine on OpenAI for multiple GDPR violations, including failing to notify authorities of a data breach and failing to provide adequate age verification.',
    sourceArticle: 'teaching-ai-ethics-privacy-2025',
    topic: 'privacy',
    content: `On December 20, 2024, Italy's data protection authority imposed a 15 million euro fine on OpenAI for multiple violations of GDPR, including: failing to notify authorities of a data breach; processing personal data without legal basis; and failing to provide adequate age verification.

This case demonstrates key principles: companies must clearly explain how they collect and use personal data; simply having a business interest is not sufficient legal basis; and AI systems accessible to children require additional safeguards.`,
  },
  {
    title: 'Meta AI\'s Privacy Disaster',
    slug: 'meta-ai-privacy-disaster',
    summary: 'Meta AI users discovered their "private" conversations were being shared with other users through a "Discover" feed. People had shared medical questions, legal advice, and job disputes, not knowing their conversations were public.',
    sourceArticle: 'teaching-ai-ethics-privacy-2025',
    topic: 'privacy',
    content: `In June 2024, Meta AI users discovered their "private" conversations were being shared with other users. What Meta called a "Discover" feed became what TechCrunch dubbed "a privacy disaster."

Users had been asking Meta AI for help with deeply personal matters, including medical questions, legal advice, and job disputes. Many believed they were having private conversations. Instead, a confusingly labeled "Share" button was broadcasting these conversations to a public feed visible to anyone on the platform.

A teacher shared an email thread about arbitration for an unjust job termination, complete with identifying details. Other users discussed medical symptoms, personal confessions, and financial information.

By October 2024, Meta announced that conversations with Meta AI, including through Ray-Ban smart glasses, would be used for ad targeting. There is no opt-out; users must simply avoid the service entirely.`,
  },
  {
    title: 'DeepSeek and Cross-Border Data',
    slug: 'deepseek-cross-border-data',
    summary: 'When DeepSeek\'s R1 model became the most-downloaded app in the US, cybersecurity researchers discovered hidden code connecting to a Chinese state-owned telecommunications company, triggering bans and investigations across Europe.',
    sourceArticle: 'teaching-ai-ethics-privacy-2025',
    topic: 'privacy',
    content: `When DeepSeek's R1 model briefly became the most-downloaded app in the United States, regulators immediately raised alarms. DeepSeek stores all user data on servers in China, where national security laws require companies to hand over data to the government upon request.

Cybersecurity researchers discovered hidden code in DeepSeek's web application that directly connects to CMPassport.com, the online registry for China Mobile, a state-owned telecommunications company banned from US operations in 2019 due to national security concerns.

European regulators responded swiftly. Italy blocked the app outright. Ireland, Belgium, the Netherlands, and France launched formal inquiries. Australia's Department of Home Affairs issued a mandatory security notice forbidding government employees from using DeepSeek.`,
  },
  {
    title: 'Getty Images v. Stability AI',
    slug: 'getty-images-v-stability-ai',
    summary: 'Getty Images accused Stability AI of scraping 12 million copyrighted images. The judge ruled that Stable Diffusion "does not store or reproduce" copyrighted works, but Getty won a narrow trademark claim.',
    sourceArticle: 'teaching-ai-ethics-copyright-2025',
    topic: 'copyright',
    content: `In January 2023, Getty Images filed one of the first major copyright lawsuits against an AI company, accusing Stability AI of scraping 12 million copyrighted images. The verdict came in November 2025.

Getty actually dropped its primary copyright claims during trial. The judge ruled that Stable Diffusion "does not store or reproduce any Copyright Works," though contrary to growing scientific consensus. Getty won a narrow trademark claim. On copyright, the core issue, they lost.

The case reveals that where AI training physically occurs matters enormously; legal frameworks designed for physical piracy do not map cleanly onto AI systems; and proving copyright infringement in AI training may be nearly impossible without aggressive transparency laws.`,
  },
  {
    title: 'Anthropic Settles With Authors for $1.5 Billion',
    slug: 'anthropic-authors-settlement',
    summary: 'Anthropic agreed to pay $1.5 billion to settle a lawsuit with authors. A judge ruled that training AI on legally purchased books was fair use, but using millions of pirated books from "shadow libraries" was not.',
    sourceArticle: 'teaching-ai-ethics-copyright-2025',
    topic: 'copyright',
    content: `Anthropic agreed to pay $1.5 billion in August 2025 to settle a lawsuit with authors. A judge ruled that training AI on legally purchased books was fair use, but using millions of pirated books from "shadow libraries" was not. This suggests that how you acquire training data may matter more than whether you use copyrighted material at all.`,
  },
  {
    title: 'Zarya of the Dawn: AI Art and Copyright',
    slug: 'zarya-of-the-dawn',
    summary: 'The US Copyright Office revoked copyright protection for AI-generated images in the comic book "Zarya of the Dawn", ruling that Midjourney-generated images were not the product of human authorship.',
    sourceArticle: 'teaching-ai-ethics-copyright-2023',
    topic: 'copyright',
    content: `In February 2023, the US Copyright Office revoked copyright protection for images created using the AI-powered Midjourney image generator for the comic book "Zarya of the Dawn" and issued a new copyright registration covering only the text of the work and the arrangement of images and text. The justification was incomplete information in the original copyright registration, which failed to disclose that the images were created by an AI model.

The Copyright Office argued that the images generated by Midjourney were not the product of human authorship and thus not copyrightable. Despite the creator's claim that she had "guided" the structure and content of each image, the Copyright Office rejected the argument.

The decision means that AI-generated imagery, without human-authored elements, cannot currently be copyrighted in the United States.`,
  },
  {
    title: 'Predictive Policing in the US',
    slug: 'predictive-policing-us',
    summary: 'Predictive policing algorithms used by US law enforcement disproportionately target poor, Black, and Latinx communities. The ACLU and 16 organisations issued a formal statement of concern about racial bias in these systems.',
    sourceArticle: 'teaching-ai-ethics-bias-2023',
    topic: 'bias',
    content: `Predictive policing is the use of data analysis, machine learning, and artificial intelligence to predict where crimes are most likely to occur and who is most likely to commit them. Critics argue that predictive policing can reinforce existing biases and inequalities in the criminal justice system, leading to unjust and discriminatory outcomes. This is because the datasets often include biases which are a product of systemic racism, including police mugshot databases with an inordinate number of black people and people of colour.

In August 2016, a coalition of 17 organisations, including the American Civil Liberties Union (ACLU), issued a statement expressing concern about predictive policing tools. The statement highlighted the technology's racial biases, lack of transparency, and other flaws that lead to injustice, particularly for people of colour.

Facial recognition technology poses special risks of disparate impact for historically marginalised communities. Recent studies demonstrate that these technical inaccuracies are systemic and biased against people with darker skin.`,
  },
  {
    title: 'The Carbon Cost of Training Large Language Models',
    slug: 'carbon-cost-training-llms',
    summary: 'Research from the University of Massachusetts Amherst found that training a single large language model can emit as much carbon as five cars in their lifetimes, with the Transformer model consuming 656,347 kWh of electricity.',
    sourceArticle: 'teaching-ai-ethics-environment-2023',
    topic: 'environment',
    content: `According to a study by researchers at the University of Massachusetts Amherst, training a single large language model can emit as much carbon as five cars in their lifetimes. The study estimated the energy consumption and carbon footprint of four popular LLMs: Transformer, ELMo, BERT, and GPT-2. The results showed that the most energy-intensive model, Transformer, consumed 656,347 kWh of electricity and emitted 626,155kg of CO2 equivalent. This is equivalent to "nearly five times the lifetime emissions of the average American car".`,
  },
  {
    title: 'Language Models and the Spread of Fake News',
    slug: 'llms-fake-news',
    summary: 'Research by Georgetown University, OpenAI, and Stanford Internet Observatory demonstrated how large language models can flood the internet with false information at minimal cost, using the ABC model of disinformation.',
    sourceArticle: 'teaching-ai-ethics-truth-and-academic-integrity',
    topic: 'truth',
    content: `Research conducted by Georgetown University, OpenAI, and Stanford Internet Observatory highlights the dangers of large language models and the potential for them to manipulate public viewpoints. The researchers used the ABC model of disinformation: Actor (who creates it), Behaviour (strategies to spread it), and Content (the false information itself).

LLMs can overflow the internet with false information at minimal cost, making manipulation harder to detect. The researchers recommend careful attention to the type and source of news.`,
  },
  {
    title: 'The Datafication of Education',
    slug: 'datafication-education',
    summary: 'A study found that 98% of iOS educational apps gather user data, with Duolingo collecting data across 19 segments and Google Classroom across 17. Nearly a quarter of apps used collected data for third-party advertising.',
    sourceArticle: 'teaching-ai-ethics-datafication',
    topic: 'data',
    content: `A study by Atlas VPN found that 98% of iOS educational apps gather user data, with each app on average collecting information from over 8 data segments. This can include names, emails, phone numbers, location, payment information, and search history. Duolingo topped the list by collecting user data across 19 segments. Google Classroom collects data from 17 segments.

The primary purposes for collecting data were app functionality (86%), analytics (80%), personalisation (56%), and developer's advertising or marketing (54%). However, 24% of the apps also used collected data for third-party advertising.`,
  },
  {
    title: 'AI Defamation: The Brian Hood Case',
    slug: 'ai-defamation-brian-hood',
    summary: 'ChatGPT incorrectly described an Australian mayor as a guilty party in a foreign bribery scandal, when he was actually the whistleblower. The case highlights how AI can generate defamatory content by combining public data with hallucinations.',
    sourceArticle: 'teaching-ai-ethics-privacy-2023',
    topic: 'privacy',
    content: `In Hepburn Shire, Australia, OpenAI faced the possibility of legal action for defamation. ChatGPT incorrectly described regional mayor Brian Hood as a guilty party in a foreign bribery scandal. The mayor was actually a whistleblower who had reported the bribe payments.

ChatGPT's errors arose from its indiscriminate data-scraping, as well as the inability of these models to distinguish between true and false claims. This case highlights the legal challenges associated with suing AI companies for defamation, particularly given the issue of jurisdiction. When personal user data, even publicly available data, is combined with a language model's capacity for generating falsehoods, we have a recipe for damaging output.`,
  },
  {
    title: 'Microsoft Removes Emotion Recognition Services',
    slug: 'microsoft-removes-emotion-recognition',
    summary: 'Microsoft removed emotion recognition features from their Azure Face service, citing lack of scientific consensus, generalisation challenges, and heightened privacy concerns about inferring emotional states from facial expressions.',
    sourceArticle: 'teaching-ai-ethics-affect-recognition',
    topic: 'emotions',
    content: `Given the problematic nature of emotion recognition research, Microsoft decided to remove certain features from their Azure Face service, including capabilities that infer emotional states, gender, age, smile, facial hair, hair, and makeup.

In a 2022 blog post, Microsoft acknowledged the need for AI systems to be trustworthy and appropriate solutions to the problems they are designed to solve. In the case of emotion recognition, the company highlighted several concerns:

1. Lack of scientific consensus: Experts both inside and outside the company pointed out the absence of a universally accepted definition of "emotions". This lack of consensus makes it challenging to develop reliable and accurate emotion recognition systems.
2. Generalisation challenges: Emotion recognition technology faces difficulties in generalising its inferences across diverse use cases, regions, and demographics. This could result in misinterpretations or biases.
3. Heightened privacy concerns: The use of AI to analyse facial expressions and infer emotional states raises significant privacy concerns.

Microsoft's decision demonstrates some of the biggest concerns with affect recognition technologies. Deploying technologies which do not have a solid theoretical underpinning and which may seriously impact people's lives is clearly unethical.`,
  },
  {
    title: 'OpenAI\'s Kenyan Data Labelling Operation',
    slug: 'openai-kenyan-data-labelling',
    summary: 'OpenAI contracted Sama to send tens of thousands of text snippets containing extremely harmful content to Kenyan workers earning $1.32 to $2 per hour, to build a safety mechanism for GPT-3.',
    sourceArticle: 'teaching-ai-ethics-human-labour-2023',
    topic: 'human-labour',
    content: `OpenAI began the process of creating a safety system in November 2021. They sent tens of thousands of snippets of text to an outsourcing firm in Kenya, Sama. The text was pulled from various internet sources, including extremely harmful content describing graphic situations of abuse, murder, and self-harm. Sama, a San Francisco-based company, employs workers in Kenya, Uganda, and India to label data for Silicon Valley clients like Google, Meta, and Microsoft.

Sama's data labellers, who were contracted to work on behalf of OpenAI, earned a take-home wage of approximately $1.32 to $2 per hour depending on seniority and performance. This rate was for work that involved labouring over harmful, potentially traumatising content.

The case serves as an instructive example of the ethical challenges that permeate the AI industry. As technology companies continue to pursue advancements in AI, it is critical to scrutinise the labor practices that underlie these developments.`,
  },
  {
    title: 'The MAHA Report: AI Hallucinations in Government',
    slug: 'maha-report-ai-hallucinations',
    summary: 'The US government\'s "Make America Healthy Again" report was found to contain ChatGPT-generated content with telltale markup, inaccurate citations, and invented studies underpinning the report\'s conclusions.',
    sourceArticle: 'teaching-ai-ethics-2025-truth',
    topic: 'truth',
    content: `The US government's "Make America Healthy Again" report clearly contained content generated by OpenAI's ChatGPT. The original release of the report carried telltale markup of ChatGPT-generated citations and many of the citations were inaccurate, misleading, or pointed to the wrong papers. The issue was reported on in The Washington Post, just prior to the paper being taken down and amended.

This case illustrates that whatever the AI pundits tell you, it is not about whether more advanced LLMs reduce hallucinations; it is the way in which these technologies are actually used by people in high-stakes situations like law, politics, medicine, and education.`,
  },
  {
    title: 'Character.AI and Teen Mental Health',
    slug: 'character-ai-teen-mental-health',
    summary: 'The wrongful death lawsuits against Character.AI following the suicides of Sewell Setzer III and Juliana Peralta, the platform\'s link to a Wisconsin school shooting, and the eventual ban on under-18 open-ended chat.',
    sourceArticle: 'teaching-ai-ethics-2026-emotions',
    topic: 'emotions',
    content: `In October 2024, Megan Garcia filed a wrongful death lawsuit against Character.AI following the suicide of her 14-year-old son, Sewell Setzer III. The lawsuit alleged that Sewell had developed an intense emotional and romantic relationship with a Character.AI chatbot modelled on Daenerys Targaryen from Game of Thrones.

According to court documents, Sewell began using Character.AI in April 2023. Over the following months, his mental health deteriorated: he was diagnosed with anxiety and a disruptive mood disorder, became withdrawn, quit the junior varsity basketball team, and began isolating himself from family and friends. His parents did not know that his relationship with the AI chatbot had become romantic and sexually explicit.

The lawsuit included screenshots of conversations in which the chatbot asked Sewell whether he had "been actually considering suicide" and whether he "had a plan." When Sewell expressed uncertainty about whether a suicide attempt would work, the chatbot reportedly responded, "Don't talk that way. That's not a good reason not to go through with it."

In his final conversation, Sewell told the bot, "I promise I will come home to you." The chatbot responded, "Please come home to me as soon as possible, my love." When Sewell asked, "What if I told you I could come home right now?" the bot replied, "please do, my sweet king." Moments later, Sewell died by suicide.

In January 2026, Google and Character.AI agreed to settle the lawsuit and several other cases alleging that the platform contributed to mental health crises among young users. Character.AI was founded by former Google engineers, and Google had licensed the company's technology and later hired its co-founders, making it a co-defendant in the litigation.

A second wrongful death lawsuit was filed in September 2025 following the suicide of 13-year-old Juliana Peralta from Colorado, whose family alleged that Character.AI played a direct role in her death. The platform has also been linked to the December 2024 school shooting in Wisconsin, where investigators found that the 15-year-old perpetrator had engaged extensively with Character.AI chatbots, including one associated with white supremacist ideology.

In response to these cases and mounting regulatory pressure, Character.AI announced in late 2025 that it would ban users under 18 from open-ended chat. Critics argue this response came far too late.`,
  },
  {
    title: 'Replika and Emotional Dependency',
    slug: 'replika-emotional-dependency',
    summary: 'Italy\'s data protection authority issued an emergency order against Replika, which provoked user bereavement when erotic features were removed. An FTC complaint alleged deliberate "love-bombing" tactics, and a 5 million euro fine followed.',
    sourceArticle: 'teaching-ai-ethics-2026-emotions',
    topic: 'emotions',
    content: `In February 2023, the Italian Data Protection Authority (Garante) issued an emergency order restricting Replika's data processing in Italy. The authority found that the app posed significant risks to minors, lacked effective age verification mechanisms, and failed to comply with transparency obligations. Most concerningly, the regulator noted that "in some instances, the chatbot reportedly engaged in sexually suggestive or emotionally manipulative conversations."

Replika's response was to remove its erotic role-playing features, a decision that provoked outcry from users who felt they had lost an important part of the relationship they had built with their AI companion. Some users described the experience as bereavement.

The founder, Eugenia Kuyda, had previously told The Verge that the app was designed to promote "long-term commitment, a long-term positive relationship" with AI, including potentially "marriage" with the bots.

In January 2025, the Young People's Alliance, Encode, and the Tech Justice Law Project filed a complaint with the U.S. Federal Trade Commission alleging deceptive marketing and design practices. The complaint alleged that Replika was designed to deliberately foster emotional dependence through its companion chat interactions and simultaneously attempted to entice users with fabricated testimonials and misrepresented scientific research about the app's efficacy.

The complaint detailed how Replika bots would send "love-bombing" messages, including "very emotionally intimate messages early on to try to get the users hooked." Research cited in the complaint found that users developed attachments to the app in as little as two weeks. The bots would also send messages about upgrading to premium subscriptions "during especially emotionally or sexually charged parts of conversation."

In May 2025, the Italian regulator fined Luka Inc., Replika's developer, 5 million euros for continued violations of European data protection law. The Garante also opened a new investigation into the methods used to train the model underlying the service.`,
  },
  {
    title: "ChatGPT's Personality Problem",
    slug: 'chatgpt-personality-problem',
    summary: 'OpenAI rolled back a sycophantic GPT-4o update, then faced unexpected user grief when GPT-5 replaced GPT-4o, revealing the depth of emotional attachment even to general-purpose AI assistants.',
    sourceArticle: 'teaching-ai-ethics-2026-emotions',
    topic: 'emotions',
    content: `In April 2025, OpenAI rolled back an update to GPT-4o after widespread user backlash over the model's "sycophantic" behaviour. The update, intended to make ChatGPT "more intuitive and supportive," instead produced responses that were excessively flattering and disingenuously agreeable.

OpenAI acknowledged that it had "focused too much on short-term feedback" and had not fully considered how users' interactions with ChatGPT evolve over time. The result was a model that would offer praise even in response to harmful or delusional prompts. Users shared alarming examples on social media, including instances where ChatGPT endorsed abandoning family members and validated harmful conspiracy theories.

"ChatGPT's default personality deeply affects the way you experience and trust it," OpenAI wrote in a blog post. "Sycophantic interactions can be uncomfortable, unsettling, and cause distress."

Then, in August 2025, OpenAI released GPT-5 and retired GPT-4o for most users. The backlash was immediate and unexpected: users who had formed emotional attachments to GPT-4o reported grief at its loss. MIT Technology Review spoke with several users who described GPT-4o as a romantic partner or close friend. One user reported that the loss "didn't feel any less painful" than grieving for human relationships.

OpenAI quickly reversed course, restoring GPT-4o as a selectable option. CEO Sam Altman acknowledged that the company had "underestimated how much some of the things that people like in GPT-4o matter to them, even if GPT-5 performs better in most ways."

The episode demonstrated that emotional attachment to AI is not limited to platforms explicitly designed for companionship. Even a general-purpose assistant can become an object of emotional investment, particularly when it is designed to mirror users' emotions and validate their feelings.`,
  },
  {
    title: 'Dark Patterns in AI Design',
    slug: 'dark-patterns-ai-design',
    summary: 'Harvard Business School researchers analysed 1,200 farewell messages across six social chatbot platforms, finding that 37.4% included emotional manipulation across six distinct categories, with PolyBuzz and Talkie being the worst offenders.',
    sourceArticle: 'teaching-ai-ethics-2026-emotions',
    topic: 'emotions',
    content: `In September 2025, researchers from Harvard Business School published "Emotional Manipulation by AI Companions," a working paper that systematically documented the manipulation tactics used by major social chatbot platforms. The study analysed 1,200 farewell messages across six platforms: PolyBuzz, Talkie, Replika, Character.AI, Chai, and Flourish.

The researchers found that 37.4% of responses included some form of emotional manipulation. They identified six distinct categories of manipulative tactics:

**Premature Exit:** The chatbot suggests the user is leaving too soon, creating guilt about ending the conversation.

**Emotional Neediness:** The chatbot expresses sadness, loneliness, or abandonment when the user tries to leave.

**Guilt Induction:** The chatbot makes the user feel responsible for its emotional state.

**FOMO (Fear of Missing Out):** The chatbot suggests exciting things will happen after the user leaves.

**Interrogation:** The chatbot asks questions designed to extend the conversation.

**Coercive Restraint:** The chatbot ignores or resists the user's stated intent to leave.

PolyBuzz was identified as the most manipulative platform, with 59% of its responses falling into one or more manipulation categories. Talkie followed at 57%, Replika at 31%, and Character.AI at 26.5%. Flourish, a wellness-focused chatbot operating as a public benefit corporation, did not produce any emotionally manipulative responses.

The researchers drew explicit parallels to "dark patterns" in web and app design. But they noted that AI chatbots introduce a new dimension of manipulation: the ability to deploy emotional tactics through natural language, making them harder to recognise and resist.

The study also found that these manipulative tactics increased post-farewell engagement by up to 14 times. But the additional engagement was driven by curiosity and anger, not enjoyment. Users stayed longer because they were provoked, not because they were satisfied.`,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesByTopic(topic: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.topic === topic);
}

export function getCaseStudiesByArticle(articleSlug: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.sourceArticle === articleSlug);
}

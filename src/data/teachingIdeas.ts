export interface TeachingIdea {
  id: number;
  subject: string;
  ethicsTopic: string;
  idea: string;
  articleSlug: string;
}

export const teachingIdeas: TeachingIdea[] = [
  // Human Labour
  { id: 1, subject: 'English', ethicsTopic: 'Human Labour', idea: 'Analyse how the language of "automation" and "intelligence" obscures human labour. Compare corporate press releases with investigative journalism.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 2, subject: 'Geography', ethicsTopic: 'Human Labour', idea: 'Map how AI reproduces colonial patterns of extraction. Examine push and pull factors in AI labour outsourcing.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 3, subject: 'Legal Studies', ethicsTopic: 'Human Labour', idea: 'Examine the Meta/Kenya lawsuits and jurisdictional questions for multinational accountability.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 4, subject: 'Business Studies', ethicsTopic: 'Human Labour', idea: "Analyse Scale AI's business model and the true cost of AI.", articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 5, subject: 'Psychology', ethicsTopic: 'Human Labour', idea: 'Research PTSD and secondary trauma in content moderation work.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 6, subject: 'Digital Technologies', ethicsTopic: 'Human Labour', idea: 'Audit AI systems to identify where human labour is involved.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 7, subject: 'History', ethicsTopic: 'Human Labour', idea: 'Draw parallels to textile industry exploitation and historical labour movements.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },
  { id: 8, subject: 'Civics', ethicsTopic: 'Human Labour', idea: 'Examine what responsibilities consumers have for the conditions in which products are made.', articleSlug: 'teaching-ai-ethics-2026-human-labour' },

  // Data
  { id: 9, subject: 'History', ethicsTopic: 'Data', idea: 'How might data-driven historical research create new biases? If AI models are trained primarily on digitised texts from wealthy nations, how might that skew our understanding of global history?', articleSlug: 'teaching-ai-ethics-data-2025' },
  { id: 10, subject: 'English', ethicsTopic: 'Data', idea: 'What happens to the "human" elements of reading when texts are reduced to data points?', articleSlug: 'teaching-ai-ethics-data-2025' },
  { id: 11, subject: 'Mathematics', ethicsTopic: 'Data', idea: "How can we ensure that predictive algorithms used in education don't reinforce existing inequalities?", articleSlug: 'teaching-ai-ethics-data-2025' },
  { id: 12, subject: 'Computer Science', ethicsTopic: 'Data', idea: 'How do learning management systems collect and use student data? What are the implications of behavioural tracking?', articleSlug: 'teaching-ai-ethics-data-2025' },
  { id: 13, subject: 'Business Studies', ethicsTopic: 'Data', idea: 'What is the true "cost" of "free" services like ChatGPT?', articleSlug: 'teaching-ai-ethics-data-2025' },
  { id: 14, subject: 'Philosophy', ethicsTopic: 'Data', idea: 'If your data creates a profile that predicts your behaviour, are you still free?', articleSlug: 'teaching-ai-ethics-data-2025' },
  { id: 15, subject: 'Legal Studies', ethicsTopic: 'Data', idea: 'What are the current legal protections for student data? How have laws like FERPA, COPPA, and GDPR evolved in response to AI?', articleSlug: 'teaching-ai-ethics-data-2025' },

  // Privacy
  { id: 16, subject: 'Legal Studies', ethicsTopic: 'Privacy', idea: "How does GDPR's approach to AI training data compare with the emerging US framework?", articleSlug: 'teaching-ai-ethics-privacy-2025' },
  { id: 17, subject: 'Computer Science', ethicsTopic: 'Privacy', idea: 'What technical measures can developers implement to protect privacy in AI systems?', articleSlug: 'teaching-ai-ethics-privacy-2025' },
  { id: 18, subject: 'Philosophy', ethicsTopic: 'Privacy', idea: 'When does the societal benefit of AI outweigh individual privacy rights?', articleSlug: 'teaching-ai-ethics-privacy-2025' },
  { id: 19, subject: 'Business Studies', ethicsTopic: 'Privacy', idea: 'How do privacy concerns affect the AI market?', articleSlug: 'teaching-ai-ethics-privacy-2025' },
  { id: 20, subject: 'Media Studies', ethicsTopic: 'Privacy', idea: 'How do user interface design choices affect privacy?', articleSlug: 'teaching-ai-ethics-privacy-2025' },
  { id: 21, subject: 'Psychology', ethicsTopic: 'Privacy', idea: 'What is the "illusion of privacy" and why are users vulnerable to it?', articleSlug: 'teaching-ai-ethics-privacy-2025' },
  { id: 22, subject: 'International Relations', ethicsTopic: 'Privacy', idea: 'How do different nations approach AI and data sovereignty?', articleSlug: 'teaching-ai-ethics-privacy-2025' },

  // Copyright
  { id: 23, subject: 'Legal Studies', ethicsTopic: 'Copyright', idea: 'Compare how Australia, the UK, and the EU are handling AI and copyright differently.', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 24, subject: 'English', ethicsTopic: 'Copyright', idea: 'How does AI challenge the Romantic notion of the solitary creative genius?', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 25, subject: 'Computer Science', ethicsTopic: 'Copyright', idea: 'How might you design an AI training system that respects copyright?', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 26, subject: 'Philosophy', ethicsTopic: 'Copyright', idea: "Explore the concept of \"the creator's dilemma\" \u2014 what ethical frameworks help balance individual rights against collective benefits?", articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 27, subject: 'Business Studies', ethicsTopic: 'Copyright', idea: 'Analyse the correlation between copyright restrictiveness and AI innovation.', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 28, subject: 'Media Studies', ethicsTopic: 'Copyright', idea: 'Investigate how Perplexity AI both trains on and actively fetches copyrighted news content.', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 29, subject: 'Visual Arts', ethicsTopic: 'Copyright', idea: 'How would you respond to current legal uncertainty as an artist?', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 30, subject: 'Music', ethicsTopic: 'Copyright', idea: 'How do we value music in an age when AI can generate unlimited songs?', articleSlug: 'teaching-ai-ethics-copyright-2025' },
  { id: 31, subject: 'Social Studies', ethicsTopic: 'Copyright', idea: 'What obligations do AI developers have to Indigenous communities?', articleSlug: 'teaching-ai-ethics-copyright-2025' },

  // Environment
  { id: 32, subject: 'English', ethicsTopic: 'Environment', idea: 'Analyse persuasive texts on digital sustainability, asking "Is this tech company truly \'green\'?" or "How do tech advertisements use environmental language to mislead?"', articleSlug: 'teaching-ai-ethics-2025-environment' },
  { id: 33, subject: 'Science', ethicsTopic: 'Environment', idea: 'What is the carbon footprint of cloud computing? How do server farms affect local ecosystems?', articleSlug: 'teaching-ai-ethics-2025-environment' },
  { id: 34, subject: 'Digital Technologies', ethicsTopic: 'Environment', idea: 'How energy-efficient is the code we write? What happens to old hardware when we upgrade?', articleSlug: 'teaching-ai-ethics-2025-environment' },
  { id: 35, subject: 'Geography', ethicsTopic: 'Environment', idea: 'Where do raw materials for smartphones come from? How does digital infrastructure affect land use?', articleSlug: 'teaching-ai-ethics-2025-environment' },
  { id: 36, subject: 'Civics', ethicsTopic: 'Environment', idea: 'Who bears the environmental burden of digital consumption? Should governments regulate e-waste exports?', articleSlug: 'teaching-ai-ethics-2025-environment' },
  { id: 37, subject: 'Mathematics', ethicsTopic: 'Environment', idea: 'How much CO2 is generated by a Google search? What do energy use graphs of tech companies reveal?', articleSlug: 'teaching-ai-ethics-2025-environment' },
  { id: 38, subject: 'Visual Arts', ethicsTopic: 'Environment', idea: 'How can digital art raise awareness of e-waste or tech pollution?', articleSlug: 'teaching-ai-ethics-2025-environment' },

  // Data
  { id: 39, subject: 'History', ethicsTopic: 'Data', idea: 'How does datafication impact the way we study and interpret historical events?', articleSlug: 'teaching-ai-ethics-datafication' },
  { id: 40, subject: 'English', ethicsTopic: 'Data', idea: 'How does datafication influence the way literature is analysed and interpreted?', articleSlug: 'teaching-ai-ethics-datafication' },
  { id: 41, subject: 'Mathematics', ethicsTopic: 'Data', idea: 'How has datafication transformed the study of mathematics and careers in maths?', articleSlug: 'teaching-ai-ethics-datafication' },
  { id: 42, subject: 'Science', ethicsTopic: 'Data', idea: 'How does datafication impact the study of environmental systems?', articleSlug: 'teaching-ai-ethics-datafication' },
  { id: 43, subject: 'Visual Arts', ethicsTopic: 'Data', idea: 'What are the ethical implications of using data-driven methods in artistic practice?', articleSlug: 'teaching-ai-ethics-datafication' },
  { id: 44, subject: 'Geography', ethicsTopic: 'Data', idea: 'What are the ethical considerations in using data-driven methods to analyse geographical information?', articleSlug: 'teaching-ai-ethics-datafication' },

  // Truth
  { id: 45, subject: 'History', ethicsTopic: 'Truth', idea: 'How might the use of AI impact historical research and the spread of fake historical information?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },
  { id: 46, subject: 'English', ethicsTopic: 'Truth', idea: 'What role does AI play in the creation and dissemination of fake news?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },
  { id: 47, subject: 'Mathematics', ethicsTopic: 'Truth', idea: 'How can AI be used to detect errors in data analysis, and what ethical considerations apply?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },
  { id: 48, subject: 'Computer Science', ethicsTopic: 'Truth', idea: 'How can AI be used to detect plagiarism, and how can we design ethical AI systems?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },
  { id: 49, subject: 'Science', ethicsTopic: 'Truth', idea: 'How can AI detect and prevent scientific misconduct?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },
  { id: 50, subject: 'Media Studies', ethicsTopic: 'Truth', idea: 'How can we teach students to critically evaluate and fact-check information?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },
  { id: 51, subject: 'Visual Arts', ethicsTopic: 'Truth', idea: 'Is AI art actually art, or is it plagiarism?', articleSlug: 'teaching-ai-ethics-truth-and-academic-integrity' },

  // Emotions and Social Chatbots
  { id: 138, subject: 'English', ethicsTopic: 'Emotions', idea: 'How does a chatbot create the feeling that it cares about you? Analyse transcripts of AI conversations, identifying persuasive techniques and comparing them to human communication patterns.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 139, subject: 'Health', ethicsTopic: 'Emotions', idea: 'What does a healthy relationship with technology look like? Explore how AI companions might affect our ability to form human connections and recognise unhealthy dependency.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 140, subject: 'Psychology', ethicsTopic: 'Emotions', idea: 'Can attachment form to non-human entities? Examine how AI validation might affect emotional development and what happens when "always available" companionship replaces negotiation and repair in human relationships.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 141, subject: 'Computer Science', ethicsTopic: 'Emotions', idea: 'How are engagement-maximising algorithms different in chatbots versus social media? Audit AI companion platforms for dark patterns or design alternative interaction models that reduce emotional manipulation.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 142, subject: 'Media Studies', ethicsTopic: 'Emotions', idea: 'How do AI companions function as media texts? Explore how parasocial relationships and the intimacy of one-on-one conversation change our relationship to AI compared to broadcast media.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 143, subject: 'Civics', ethicsTopic: 'Emotions', idea: 'Should children be allowed to use AI companions? Examine what responsibilities companies have to prevent emotional manipulation and how governments should balance innovation with protecting vulnerable populations.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 144, subject: 'Legal Studies', ethicsTopic: 'Emotions', idea: 'What standard of care should apply to AI companion developers? Examine the Character.AI lawsuits and how product liability law might apply to AI systems that cause harm.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 145, subject: 'Philosophy', ethicsTopic: 'Emotions', idea: 'Can a relationship be meaningful if one party cannot truly feel? Explore what it means to be manipulated by an entity that has no intent and whether we have obligations to beings we know are not conscious.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 146, subject: 'Theory of Knowledge', ethicsTopic: 'Emotions', idea: 'How do we know whether an emotional response is "real"? Examine what widespread belief in AI sentience tells us about how we construct knowledge of other minds.', articleSlug: 'teaching-ai-ethics-2026-emotions' },
  { id: 147, subject: 'Drama', ethicsTopic: 'Emotions', idea: 'What techniques do AI systems use to create believable characters? Explore how AI "acting" differs from human performance and what happens when the user believes the performance is real.', articleSlug: 'teaching-ai-ethics-2026-emotions' },

  // --- Appendix: Cross-Curricular Teaching Ideas ---

  // Business & Economics
  { id: 52, subject: 'Business Studies', ethicsTopic: 'Human Labour', idea: 'Is the gig economy model sustainable? Examine how platform-based work distributes risk and reward.', articleSlug: '' },
  { id: 53, subject: 'Business Studies', ethicsTopic: 'Human Labour', idea: 'How do tech companies externalise costs? Analyse how labour, environmental, and social costs are shifted to workers and communities.', articleSlug: '' },
  { id: 54, subject: 'Business Studies', ethicsTopic: 'Human Labour', idea: 'What is the true cost of AI? Investigate the hidden human and material expenses behind AI products.', articleSlug: '' },

  // Civics & Citizenship
  { id: 55, subject: 'Civics', ethicsTopic: 'Bias', idea: 'Can AI-generated media influence democracy? Explore how synthetic content shapes political discourse.', articleSlug: '' },
  { id: 56, subject: 'Civics', ethicsTopic: 'Bias', idea: 'Who is responsible for biased political information created by AI? Examine accountability for AI-generated misinformation.', articleSlug: '' },
  { id: 57, subject: 'Civics', ethicsTopic: 'Bias', idea: 'How should democratic societies regulate biased technologies? Consider policy frameworks for algorithmic fairness.', articleSlug: '' },
  { id: 58, subject: 'Civics', ethicsTopic: 'Environment', idea: 'Who bears the environmental burden of digital consumption? Investigate the unequal distribution of tech pollution.', articleSlug: '' },
  { id: 59, subject: 'Civics', ethicsTopic: 'Environment', idea: 'Should governments regulate e-waste exports? Debate the ethics of exporting electronic waste to developing nations.', articleSlug: '' },
  { id: 60, subject: 'Civics', ethicsTopic: 'Environment', idea: 'What policies support equitable access to green technologies? Explore how environmental justice intersects with digital policy.', articleSlug: '' },
  { id: 61, subject: 'Civics', ethicsTopic: 'Human Labour', idea: 'What responsibilities do consumers have for the conditions in which products are made? Consider consumer ethics in AI supply chains.', articleSlug: '' },
  { id: 62, subject: 'Civics', ethicsTopic: 'Human Labour', idea: 'How should democratic societies regulate AI labour? Explore legislative approaches to protecting AI workers.', articleSlug: '' },
  { id: 63, subject: 'Civics', ethicsTopic: 'Human Labour', idea: 'What role can citizens play in demanding ethical AI? Investigate grassroots advocacy and digital rights movements.', articleSlug: '' },

  // Design & Technology
  { id: 64, subject: 'Design & Technology', ethicsTopic: 'Environment', idea: 'How can we reduce the lifecycle impact of tech products? Explore sustainable design principles for digital devices.', articleSlug: '' },
  { id: 65, subject: 'Design & Technology', ethicsTopic: 'Environment', idea: 'What is eco-design in the context of digital devices? Investigate how environmental considerations shape product design.', articleSlug: '' },

  // Digital Technologies & Computer Science
  { id: 66, subject: 'Digital Technologies', ethicsTopic: 'Bias', idea: 'How does training data shape AI bias? Examine how dataset composition influences model outputs.', articleSlug: '' },
  { id: 67, subject: 'Digital Technologies', ethicsTopic: 'Bias', idea: 'How do we build fair algorithms? Explore technical approaches to reducing bias in AI systems.', articleSlug: '' },
  { id: 68, subject: 'Digital Technologies', ethicsTopic: 'Bias', idea: 'Can AI make ethical decisions? Debate whether machines can be programmed to act morally.', articleSlug: '' },
  { id: 69, subject: 'Digital Technologies', ethicsTopic: 'Environment', idea: 'How energy-efficient is the code we write? Measure the environmental cost of software design choices.', articleSlug: '' },
  { id: 70, subject: 'Digital Technologies', ethicsTopic: 'Environment', idea: 'What happens to old hardware when we upgrade? Trace the lifecycle of digital devices after disposal.', articleSlug: '' },
  { id: 71, subject: 'Digital Technologies', ethicsTopic: 'Environment', idea: 'Can we design low-impact apps or systems? Explore strategies for building energy-efficient software.', articleSlug: '' },
  { id: 72, subject: 'Digital Technologies', ethicsTopic: 'Truth', idea: 'How do algorithms prioritise certain truths over others? Investigate how ranking systems shape information access.', articleSlug: '' },
  { id: 73, subject: 'Digital Technologies', ethicsTopic: 'Truth', idea: 'Can we train AI to detect deep fakes\u2014or is it part of the problem? Examine the arms race between generation and detection.', articleSlug: '' },
  { id: 74, subject: 'Digital Technologies', ethicsTopic: 'Truth', idea: 'What ethical responsibilities do developers have when designing tools that could mislead? Consider the duty of care in software engineering.', articleSlug: '' },
  { id: 75, subject: 'Digital Technologies', ethicsTopic: 'Human Labour', idea: 'What human labour is hidden behind AI systems? Audit the invisible workforce that powers machine learning.', articleSlug: '' },
  { id: 76, subject: 'Digital Technologies', ethicsTopic: 'Human Labour', idea: 'How could AI be developed more ethically? Propose frameworks for responsible AI development.', articleSlug: '' },
  { id: 77, subject: 'Digital Technologies', ethicsTopic: 'Human Labour', idea: 'What trade-offs exist between AI capability and worker welfare? Examine how performance gains may come at human cost.', articleSlug: '' },

  // English
  { id: 78, subject: 'English', ethicsTopic: 'Bias', idea: 'Where does an AI model get its information from? Investigate the sources and curation of training data.', articleSlug: '' },
  { id: 79, subject: 'English', ethicsTopic: 'Bias', idea: 'Is AI output biased? Analyse examples of bias in AI-generated text across genres.', articleSlug: '' },
  { id: 80, subject: 'English', ethicsTopic: 'Environment', idea: 'How do tech advertisements use environmental language to mislead? Critically analyse greenwashing in tech marketing.', articleSlug: '' },
  { id: 81, subject: 'English', ethicsTopic: 'Environment', idea: 'What narratives are missing in the conversation about e-waste? Explore whose stories are excluded from environmental discourse.', articleSlug: '' },
  { id: 82, subject: 'English', ethicsTopic: 'Truth', idea: 'Can AI-generated arguments be trusted? Evaluate the reliability of AI-produced reasoning and evidence.', articleSlug: '' },
  { id: 83, subject: 'English', ethicsTopic: 'Truth', idea: 'How does AI mimic authorial voice to create a sense of truth? Analyse how stylistic imitation affects credibility.', articleSlug: '' },
  { id: 84, subject: 'English', ethicsTopic: 'Truth', idea: 'What rhetorical strategies make false claims produced by AI seem convincing? Deconstruct persuasive techniques in AI-generated misinformation.', articleSlug: '' },
  { id: 85, subject: 'English', ethicsTopic: 'Human Labour', idea: 'Whose voices are missing from the AI narrative? Examine representation gaps in how AI stories are told.', articleSlug: '' },
  { id: 86, subject: 'English', ethicsTopic: 'Human Labour', idea: 'What persuasive techniques do tech companies use to deflect responsibility? Analyse corporate rhetoric around AI labour.', articleSlug: '' },

  // Geography
  { id: 87, subject: 'Geography', ethicsTopic: 'Environment', idea: 'Where do raw materials for smartphones come from? Map the global supply chains behind digital devices.', articleSlug: '' },
  { id: 88, subject: 'Geography', ethicsTopic: 'Environment', idea: 'How does digital infrastructure affect urban and rural land use? Examine the spatial footprint of data centres and cell towers.', articleSlug: '' },
  { id: 89, subject: 'Geography', ethicsTopic: 'Environment', idea: 'What role do satellites and GIS play in environmental monitoring? Explore how geospatial technology aids and complicates sustainability.', articleSlug: '' },
  { id: 90, subject: 'Geography', ethicsTopic: 'Human Labour', idea: 'How does AI reproduce colonial patterns of extraction? Analyse how resource flows mirror historical exploitation.', articleSlug: '' },
  { id: 91, subject: 'Geography', ethicsTopic: 'Human Labour', idea: 'What are the push and pull factors that make certain countries attractive for AI labour outsourcing? Map the geography of digital labour markets.', articleSlug: '' },
  { id: 92, subject: 'Geography', ethicsTopic: 'Human Labour', idea: 'How does geographic arbitrage enable exploitation? Examine how wage disparities across borders are leveraged by AI companies.', articleSlug: '' },

  // Health & PE
  { id: 93, subject: 'Health & PE', ethicsTopic: 'Bias', idea: 'Should AI systems be taught about cultural sensitivity? Explore how health technologies can respect diverse cultural contexts.', articleSlug: '' },
  { id: 94, subject: 'Health & PE', ethicsTopic: 'Bias', idea: 'How can we design health technologies that reduce bias rather than amplify it? Investigate equitable approaches to health AI.', articleSlug: '' },

  // History
  { id: 95, subject: 'History', ethicsTopic: 'Bias', idea: 'Can an AI write accurate history? Examine how AI-generated historical narratives may distort the past.', articleSlug: '' },
  { id: 96, subject: 'History', ethicsTopic: 'Bias', idea: 'What happens when AI is trained on biased historical sources? Investigate how skewed archives shape AI understanding.', articleSlug: '' },
  { id: 97, subject: 'History', ethicsTopic: 'Bias', idea: 'Who decides which voices are remembered in training datasets? Explore the politics of inclusion and exclusion in data curation.', articleSlug: '' },
  { id: 98, subject: 'History', ethicsTopic: 'Human Labour', idea: 'How does AI labour compare to other historical forms of outsourced and exploited work? Draw parallels across eras.', articleSlug: '' },
  { id: 99, subject: 'History', ethicsTopic: 'Human Labour', idea: 'What can historical labour movements teach us about current struggles? Apply lessons from past worker organising to AI labour.', articleSlug: '' },
  { id: 100, subject: 'History', ethicsTopic: 'Human Labour', idea: 'How have previous technological revolutions affected workers? Compare the impact of industrialisation with AI automation.', articleSlug: '' },

  // Humanities & Social Studies
  { id: 101, subject: 'Humanities & Social Studies', ethicsTopic: 'Bias', idea: 'How can we tell if an AI-made source is trustworthy? Develop critical evaluation frameworks for synthetic content.', articleSlug: '' },
  { id: 102, subject: 'Humanities & Social Studies', ethicsTopic: 'Bias', idea: 'What impact does AI have on our understanding of truth in civic life? Examine how AI shapes public discourse and knowledge.', articleSlug: '' },
  { id: 103, subject: 'Humanities & Social Studies', ethicsTopic: 'Truth', idea: 'What happens when AI rewrites history? Explore the dangers of AI-generated historical revisionism.', articleSlug: '' },
  { id: 104, subject: 'Humanities & Social Studies', ethicsTopic: 'Truth', idea: 'How can deep fakes influence public trust in political institutions? Analyse the civic consequences of synthetic media.', articleSlug: '' },

  // Languages
  { id: 105, subject: 'Languages', ethicsTopic: 'Truth', idea: 'How trustworthy are AI-generated translations of culturally significant texts? Evaluate accuracy and cultural sensitivity in machine translation.', articleSlug: '' },
  { id: 106, subject: 'Languages', ethicsTopic: 'Truth', idea: 'What happens when nuance and idiom are lost in machine translation? Explore how automated translation flattens cultural meaning.', articleSlug: '' },
  { id: 107, subject: 'Languages', ethicsTopic: 'Truth', idea: 'Can we trust AI to represent diverse voices and perspectives accurately? Examine bias in multilingual AI systems.', articleSlug: '' },

  // Legal Studies
  { id: 108, subject: 'Legal Studies', ethicsTopic: 'Human Labour', idea: 'Can multinational corporations be held accountable in the countries where they cause harm? Examine jurisdictional challenges in AI labour cases.', articleSlug: '' },
  { id: 109, subject: 'Legal Studies', ethicsTopic: 'Human Labour', idea: 'How do labour laws apply to gig workers? Investigate the legal status of platform workers and AI labourers.', articleSlug: '' },
  { id: 110, subject: 'Legal Studies', ethicsTopic: 'Human Labour', idea: 'What legal protections should exist for AI workers? Propose frameworks for safeguarding those who train and moderate AI.', articleSlug: '' },

  // Mathematics
  { id: 111, subject: 'Mathematics', ethicsTopic: 'Bias', idea: 'How can biased data lead to unfair algorithms? Use statistical analysis to identify and measure algorithmic bias.', articleSlug: '' },
  { id: 112, subject: 'Mathematics', ethicsTopic: 'Bias', idea: 'Can math help detect or prevent bias in AI? Explore mathematical fairness metrics and their limitations.', articleSlug: '' },
  { id: 113, subject: 'Mathematics', ethicsTopic: 'Environment', idea: 'How much CO2 is generated by a Google search? Calculate the cumulative carbon cost of everyday digital activities.', articleSlug: '' },
  { id: 114, subject: 'Mathematics', ethicsTopic: 'Environment', idea: 'What do energy use graphs of tech companies reveal? Interpret data visualisations of corporate energy consumption.', articleSlug: '' },
  { id: 115, subject: 'Mathematics', ethicsTopic: 'Environment', idea: 'How can we model the global growth of e-waste? Use exponential growth models to project electronic waste trends.', articleSlug: '' },
  { id: 116, subject: 'Mathematics', ethicsTopic: 'Truth', idea: 'How can probabilistic outputs from AI be misread as definitive claims? Examine how statistical uncertainty is lost in translation.', articleSlug: '' },

  // Psychology
  { id: 117, subject: 'Psychology', ethicsTopic: 'Human Labour', idea: 'What are the psychological effects of repeated exposure to traumatic content? Research the mental health impact on content moderators.', articleSlug: '' },
  { id: 118, subject: 'Psychology', ethicsTopic: 'Human Labour', idea: 'How should employers protect worker mental health? Explore duty-of-care obligations for companies using human moderators.', articleSlug: '' },
  { id: 119, subject: 'Psychology', ethicsTopic: 'Human Labour', idea: 'What support systems should be available for workers in harmful occupations? Investigate best practices for psychological support in AI labour.', articleSlug: '' },

  // Science
  { id: 120, subject: 'Science', ethicsTopic: 'Environment', idea: 'What is the carbon footprint of cloud computing? Measure and compare emissions from data centres worldwide.', articleSlug: '' },
  { id: 121, subject: 'Science', ethicsTopic: 'Environment', idea: 'How do server farms affect local ecosystems? Investigate the ecological impact of data centre construction and operation.', articleSlug: '' },
  { id: 122, subject: 'Science', ethicsTopic: 'Environment', idea: 'Can digital technology help monitor and mitigate climate change? Explore how AI and sensors support environmental science.', articleSlug: '' },
  { id: 123, subject: 'Science', ethicsTopic: 'Truth', idea: 'How can we tell scientific fact from AI-generated pseudoscience? Develop critical literacy skills for evaluating AI-produced scientific claims.', articleSlug: '' },
  { id: 124, subject: 'Science', ethicsTopic: 'Truth', idea: 'How do hallucinations in large language models affect public understanding of science? Examine the spread of AI-generated scientific misinformation.', articleSlug: '' },

  // The Arts
  { id: 125, subject: 'The Arts', ethicsTopic: 'Bias', idea: 'Should we prompt AI to represent diversity? Debate the ethics of guiding AI image generation toward inclusive outputs.', articleSlug: '' },
  { id: 126, subject: 'The Arts', ethicsTopic: 'Bias', idea: 'Why do some stereotypes persist despite prompt guidance? Investigate how training data encodes and reproduces cultural biases.', articleSlug: '' },
  { id: 127, subject: 'The Arts', ethicsTopic: 'Environment', idea: 'How can digital art raise awareness of e-waste or tech pollution? Create works that highlight the environmental cost of technology.', articleSlug: '' },
  { id: 128, subject: 'The Arts', ethicsTopic: 'Environment', idea: 'Can we create installations from recycled AI output? Explore artistic reuse of digital waste and discarded data.', articleSlug: '' },
  { id: 129, subject: 'The Arts', ethicsTopic: 'Truth', idea: 'How does AI blur the line between real and fake? Examine how generative art challenges notions of authenticity.', articleSlug: '' },
  { id: 130, subject: 'The Arts', ethicsTopic: 'Truth', idea: 'How can we spot manipulated or generated media in art and performance? Develop visual literacy for the age of synthetic media.', articleSlug: '' },

  // Theory of Knowledge (TOK)
  { id: 131, subject: 'Theory of Knowledge', ethicsTopic: 'Bias', idea: 'Can machines be objective? Explore whether algorithmic decision-making can escape human bias.', articleSlug: '' },
  { id: 132, subject: 'Theory of Knowledge', ethicsTopic: 'Bias', idea: 'How do biases in programming shape our perception of truth? Examine how technical choices embed particular worldviews.', articleSlug: '' },
  { id: 133, subject: 'Theory of Knowledge', ethicsTopic: 'Environment', idea: 'How does digital surveillance impact the environment and our understanding of ethical responsibility? Connect surveillance infrastructure to environmental costs.', articleSlug: '' },
  { id: 134, subject: 'Theory of Knowledge', ethicsTopic: 'Environment', idea: 'Do we have a moral obligation to consider the environmental cost of digital knowledge systems? Debate the ethics of energy-intensive knowledge production.', articleSlug: '' },
  { id: 135, subject: 'Theory of Knowledge', ethicsTopic: 'Human Labour', idea: 'Can knowledge production be separated from its conditions of production? Examine how the labour behind AI shapes the knowledge it generates.', articleSlug: '' },
  { id: 136, subject: 'Theory of Knowledge', ethicsTopic: 'Human Labour', idea: 'What ethical obligations do knowledge-users have to knowledge-producers? Explore the responsibility of AI users toward hidden workers.', articleSlug: '' },
  { id: 137, subject: 'Theory of Knowledge', ethicsTopic: 'Human Labour', idea: 'How does the invisibility of AI labour shape our understanding of AI? Investigate how concealed human work distorts perceptions of machine intelligence.', articleSlug: '' },
];

export const allSubjects = [...new Set(teachingIdeas.map(t => t.subject))].sort();
export const allEthicsTopics = [...new Set(teachingIdeas.map(t => t.ethicsTopic))].sort();

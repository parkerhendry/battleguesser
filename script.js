        // Battle data
        const battles = [
            {
                id: 1,
                name: "Battle of Waterloo",
                year: 1815,
                location: [50.68, 4.41], // [lat, lng]
                imageQuery: "battle of waterloo",
                description: "The Battle of Waterloo marked Napoleon Bonaparte's final defeat. On June 18, 1815, near Waterloo in present-day Belgium, the French army under Napoleon was defeated by two armies of the Seventh Coalition: a British-led coalition including units from the United Kingdom, the Netherlands, Hanover, Brunswick, and Nassau, under the command of the Duke of Wellington, and a Prussian army under the command of Field Marshal Blücher."
            },
            {
                id: 2,
                name: "Battle of Gettysburg",
                year: 1863,
                location: [39.81, -77.23],
                imageQuery: "battle of gettysburg",
                description: "The Battle of Gettysburg was fought July 1–3, 1863, in and around the town of Gettysburg, Pennsylvania. It was the battle with the largest number of casualties in the American Civil War and is often described as the war's turning point. Union Major General George Meade's Army of the Potomac defeated attacks by Confederate General Robert E. Lee's Army of Northern Virginia, halting Lee's invasion of the North."
            },
            {
                id: 3,
                name: "Battle of Stalingrad",
                year: 1942,
                location: [48.7, 44.5],
                imageQuery: "battle of stalingrad",
                description: "The Battle of Stalingrad was a major battle on the Eastern Front of World War II where Nazi Germany and its allies fought the Soviet Union for control of the city of Stalingrad in Southern Russia. The battle took place between August 23, 1942, and February 2, 1943, and is often regarded as the largest and bloodiest battle in the history of warfare. The German defeat at Stalingrad marked the turning point of the war in the European theater."
            },
            {
                id: 4,
                name: "Battle of Hastings",
                year: 1066,
                location: [50.91, 0.48],
                imageQuery: "battle of hastings",
                description: "The Battle of Hastings took place on October 14, 1066, between the Norman-French army of William, the Duke of Normandy, and an English army under the Anglo-Saxon King Harold Godwinson. It began the Norman conquest of England and was a decisive Norman victory. King Harold II was killed in the battle—legend has it that he was shot through the eye with an arrow."
            },
            {
                id: 5,
                name: "Battle of Thermopylae",
                year: -480, // BCE
                location: [38.8, 22.53],
                imageQuery: "battle of thermopylae",
                description: "The Battle of Thermopylae was fought between an alliance of Greek city-states, led by King Leonidas I of Sparta, and the Achaemenid Empire of Xerxes I in 480 BCE. It was fought over the course of three days during the second Persian invasion of Greece. The battle took place at the narrow coastal pass of Thermopylae ('The Hot Gates'). The Persian invasion was a delayed response to the defeat of the first Persian invasion of Greece at the Battle of Marathon."
            },
            {
                id: 6,
                name: "Battle of Trafalgar",
                year: 1805,
                location: [36.2, -6.15],
                imageQuery: "battle of trafalgar",
                description: "The Battle of Trafalgar was a naval engagement fought by the British Royal Navy against the combined fleets of the French and Spanish Navies on October 21, 1805, during the War of the Third Coalition of the Napoleonic Wars. The battle took place in the Atlantic Ocean off the coast of Spain, just west of Cape Trafalgar. The Franco-Spanish fleet lost twenty-two ships, without a single British vessel being lost."
            },
            {
                id: 7,
                name: "Battle of Midway",
                year: 1942,
                location: [28.2, -177.35],
                imageQuery: "battle of midway",
                description: "The Battle of Midway was a decisive naval battle in the Pacific Theater of World War II that took place on June 4-7, 1942. The United States Navy under Admirals Chester W. Nimitz, Frank Jack Fletcher, and Raymond A. Spruance defeated an attacking fleet of the Imperial Japanese Navy under Admirals Isoroku Yamamoto, Chuichi Nagumo, and Nobutake Kondo near Midway Atoll, inflicting devastating damage on the Japanese fleet."
            },
            {
                id: 8,
                name: "Battle of Marathon",
                year: -490, // BCE
                location: [38.11, 23.94],
                imageQuery: "battle of marathon",
                description: "The Battle of Marathon took place in 490 BCE during the first Persian invasion of Greece. It was fought between the citizens of Athens, aided by Plataea, and a Persian force commanded by Datis and Artaphernes. The battle was the culmination of the first attempt by Persia, under King Darius I, to subjugate Greece. The Greek victory at Marathon marked the end of the first Persian invasion of Greece."
            },
            {
                id: 9,
                name: "Battle of Yorktown",
                year: 1781,
                location: [37.23, -76.5],
                imageQuery: "battle of yorktown",
                description: "The Siege of Yorktown, also known as the Battle of Yorktown, was a decisive victory by combined American and French forces led by General George Washington and the Comte de Rochambeau over a British army commanded by General Lord Cornwallis. The siege took place from September 28 to October 19, 1781, and was the last major land battle of the American Revolutionary War."
            },
            {
                id: 10,
                name: "Battle of Vienna",
                year: 1683,
                location: [48.21, 16.37],
                imageQuery: "battle of vienna",
                description: "The Battle of Vienna took place at Kahlenberg Mountain near Vienna on September 12, 1683, after the imperial city had been besieged by the Ottoman Empire for two months. The battle was fought by the Habsburg Monarchy, the Polish-Lithuanian Commonwealth and the Holy Roman Empire against the invading Ottoman Empire. The battle marked the beginning of the political hegemony of the Habsburg dynasty in the Eastern European region."
            },
            
            // Ancient World (3000 BCE - 500 CE)
            {
                id: 11,
                name: "Battle of Kadesh",
                year: -1274, // BCE
                location: [34.57, 36.51],
                imageQuery: "battle of kadesh ancient egypt",
                description: "Fought in 1274 BCE between the Egyptian Empire under Ramesses II and the Hittite Empire under Muwatalli II, the Battle of Kadesh is one of the earliest pitched battles in recorded history. Despite Egypt's claims of victory, the battle ended in a stalemate and led to the world's first known peace treaty."
            },
            {
                id: 12,
                name: "Battle of Gaugamela",
                year: -331, // BCE
                location: [36.36, 43.15],
                imageQuery: "battle of gaugamela alexander",
                description: "The Battle of Gaugamela in 331 BCE saw Alexander the Great of Macedonia defeat Darius III of Persia. Despite being outnumbered, Alexander's tactical genius led to a decisive victory that effectively conquered the Persian Empire and marked a turning point in the history of the ancient world."
            },
            {
                id: 13,
                name: "Battle of Cannae",
                year: -216, // BCE
                location: [41.28, 16.07],
                imageQuery: "battle of cannae hannibal",
                description: "The Battle of Cannae (216 BCE) was a major victory of Hannibal over the Roman Republic during the Second Punic War. Hannibal's forces, despite being outnumbered, surrounded and annihilated a larger Roman army under consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It remains one of the greatest tactical feats in military history."
            },
            {
                id: 14,
                name: "Battle of Actium",
                year: -31, // BCE
                location: [38.97, 20.76],
                imageQuery: "battle of actium",
                description: "The Battle of Actium was a decisive naval engagement in 31 BCE between the forces of Octavian (later Emperor Augustus) and the combined forces of Mark Antony and Cleopatra. Octavian's victory enabled him to consolidate his power and marked the beginning of the Roman Empire."
            },
            {
                id: 15,
                name: "Battle of Teutoburg Forest",
                year: 9, // CE
                location: [52.02, 8.35],
                imageQuery: "battle of teutoburg forest",
                description: "The Battle of the Teutoburg Forest in 9 CE saw an alliance of Germanic tribes led by Arminius defeat three Roman legions under Publius Quinctilius Varus. This decisive German victory halted the Roman Empire's advance east of the Rhine River and marked a critical turning point in the history of Europe."
            },
            {
                id: 16,
                name: "Battle of Alesia",
                year: -52, // BCE
                location: [47.54, 4.5],
                imageQuery: "battle of alesia caesar",
                description: "The Battle of Alesia in 52 BCE saw Julius Caesar defeat the Gallic forces under Vercingetorix. Caesar's innovative siege tactics, including constructing dual fortification walls, allowed the Romans to overcome a numerically superior force. This victory completed the Roman conquest of Gaul."
            },
            {
                id: 17,
                name: "Battle of Red Cliffs",
                year: 208, // CE
                location: [29.83, 113.6],
                imageQuery: "battle of red cliffs three kingdoms",
                description: "The Battle of Red Cliffs (208 CE) was a decisive naval battle at the end of the Han dynasty. The allied forces of Liu Bei and Sun Quan defeated the numerically superior forces of Cao Cao. This battle halted Cao Cao's efforts to conquer the lands south of the Yangtze River and set the stage for the Three Kingdoms period in China."
            },
            {
                id: 18,
                name: "Battle of Adrianople",
                year: 378, // CE
                location: [41.67, 26.57],
                imageQuery: "battle of adrianople 378",
                description: "The Battle of Adrianople in 378 CE was fought between an Eastern Roman army led by Emperor Valens and Gothic rebels. The Romans were decisively defeated, and Valens was killed. This battle is often considered the start of the fall of the Western Roman Empire and marked a turning point in military tactics where heavy cavalry began to replace infantry as the dominant force on the battlefield."
            },
            
            // Medieval Period (500-1500)
            {
                id: 19,
                name: "Battle of Tours",
                year: 732,
                location: [47.39, 0.69],
                imageQuery: "battle of tours charles martel",
                description: "The Battle of Tours (also called Battle of Poitiers) in 732 CE saw Frankish forces under Charles Martel defeat an invading Muslim army. This battle is often credited with halting the northward advance of Islam from the Iberian Peninsula into Western Europe, helping preserve Christianity as the dominant religion in Europe."
            },
            {
                id: 20,
                name: "Battle of Hattin",
                year: 1187,
                location: [32.8, 35.45],
                imageQuery: "battle of hattin crusades",
                description: "The Battle of Hattin in 1187 was a decisive victory for Saladin over the Crusader Kingdom of Jerusalem. The battle resulted in the destruction of the Crusader army and led to the subsequent fall of Jerusalem, triggering the Third Crusade."
            },
            {
                id: 21,
                name: "Battle of Stamford Bridge",
                year: 1066,
                location: [53.99, -0.92],
                imageQuery: "battle of stamford bridge",
                description: "The Battle of Stamford Bridge took place on September 25, 1066, just weeks before the Battle of Hastings. King Harold II of England defeated an invading Norwegian force led by King Harald Hardrada. The battle is often marked as the end of the Viking Age, though Harold's forces were then weakened for their confrontation with William of Normandy."
            },
            {
                id: 22,
                name: "Battle of Agincourt",
                year: 1415,
                location: [50.46, 2.13],
                imageQuery: "battle of agincourt",
                description: "The Battle of Agincourt was an English victory against a numerically superior French army during the Hundred Years' War. On October 25, 1415, King Henry V's forces, though exhausted and outnumbered, defeated the French, primarily due to the effectiveness of the English longbow and the muddy terrain that disadvantaged the heavily armored French knights."
            },
            {
                id: 23,
                name: "Battle of Crécy",
                year: 1346,
                location: [50.26, 1.89],
                imageQuery: "battle of crecy",
                description: "The Battle of Crécy, fought on August 26, 1346, was an important English victory during the Hundred Years' War. The English army under King Edward III defeated the French under King Philip VI. The battle established the effectiveness of the English longbow over the French crossbow and marked a shift in medieval warfare tactics."
            },
            {
                id: 24,
                name: "Battle of Manzikert",
                year: 1071,
                location: [39.14, 42.54],
                imageQuery: "battle of manzikert",
                description: "The Battle of Manzikert was fought between the Byzantine Empire and the Seljuk Turks on August 26, 1071. The decisive victory of the Seljuks led by Alp Arslan over the Byzantine Emperor Romanos IV Diogenes was a pivotal moment, contributing to the decline of Byzantine power and the Turkification of Anatolia."
            },
            {
                id: 25,
                name: "Battle of Bannockburn",
                year: 1314,
                location: [56.09, -3.91],
                imageQuery: "battle of bannockburn",
                description: "The Battle of Bannockburn was fought on June 23-24, 1314, during the First War of Scottish Independence. Scottish forces under King Robert the Bruce defeated English forces commanded by King Edward II, securing Scottish independence from English control and establishing Robert as the undisputed King of Scots."
            },
            {
                id: 26,
                name: "Battle of Kulikovo",
                year: 1380,
                location: [53.67, 38.67],
                imageQuery: "battle of kulikovo",
                description: "The Battle of Kulikovo was fought on September 8, 1380, between the forces of the Golden Horde under Mamai and various Russian principalities under the command of Prince Dmitri of Moscow. The Russians' victory, while not immediately ending Mongol rule, is widely regarded as the beginning of the end of Mongol domination over Russia."
            },
            {
                id: 27,
                name: "Battle of Ain Jalut",
                year: 1260,
                location: [32.5, 35.33],
                imageQuery: "battle of ain jalut",
                description: "The Battle of Ain Jalut was fought on September 3, 1260, between the Mamluk Sultanate of Egypt and the Mongol Empire. The Mamluks, led by Sultan Qutuz and General Baibars, achieved a decisive victory, marking the first time a Mongol advance had been permanently halted, saving Egypt and possibly the wider Muslim world from Mongol conquest."
            },
            
            // Early Modern Period (1500-1800)
            {
                id: 28,
                name: "Battle of Lepanto",
                year: 1571,
                location: [38.33, 21.77],
                imageQuery: "battle of lepanto",
                description: "The Battle of Lepanto was a naval engagement that took place on October 7, 1571, when a fleet of the Holy League, a coalition of Catholic states, defeated the fleet of the Ottoman Empire. This victory marked the turning point of Ottoman military expansion into the Mediterranean, ending their naval dominance in the region."
            },
            {
                id: 29,
                name: "Battle of Breitenfeld",
                year: 1631,
                location: [51.41, 12.3],
                imageQuery: "battle of breitenfeld thirty years war",
                description: "The Battle of Breitenfeld was fought on September 17, 1631, during the Thirty Years' War. The Swedish forces under King Gustavus Adolphus and their Saxon allies decisively defeated the Catholic League led by General Tilly. This battle demonstrated the effectiveness of the innovative Swedish military system and marked the emergence of Sweden as a major European power."
            },
            {
                id: 30,
                name: "Battle of Bosworth Field",
                year: 1485,
                location: [52.6, -1.41],
                imageQuery: "battle of bosworth field",
                description: "The Battle of Bosworth Field was the decisive battle of the Wars of the Roses, fought on August 22, 1485. The forces of Henry Tudor defeated the army of King Richard III, who was killed in the battle. This victory established the Tudor dynasty on the English throne and is often considered the end of the medieval period in England."
            },
            {
                id: 31,
                name: "Battle of Saratoga",
                year: 1777,
                location: [43.08, -73.58],
                imageQuery: "battle of saratoga",
                description: "The Battles of Saratoga were a series of two battles, fought nineteen days apart in the fall of 1777 during the American Revolutionary War. The American victory resulted in the surrender of an entire British army and convinced France to enter the war on the American side, turning a colonial uprising into a major international conflict."
            },
            {
                id: 32,
                name: "Battle of Québec",
                year: 1759,
                location: [46.81, -71.21],
                imageQuery: "battle of quebec 1759",
                description: "The Battle of Québec, also known as the Battle of the Plains of Abraham, was fought on September 13, 1759, during the Seven Years' War. British forces under General James Wolfe defeated French forces under the Marquis de Montcalm, leading to the capture of Quebec City and eventually all of New France (Canada)."
            },
            {
                id: 33,
                name: "Battle of Poltava",
                year: 1709,
                location: [49.59, 34.56],
                imageQuery: "battle of poltava",
                description: "The Battle of Poltava was fought on June 28, 1709, and was the decisive victory of Peter the Great of Russia over Charles XII of Sweden during the Great Northern War. This battle marked the end of Sweden as a major European power and the beginning of Russian imperial dominance in Eastern Europe."
            },
            {
                id: 34,
                name: "Siege of Constantinople",
                year: 1453,
                location: [41.01, 28.98],
                imageQuery: "siege of constantinople 1453",
                description: "The Fall of Constantinople was the capture of the Byzantine Empire's capital by the Ottoman Empire. The Ottomans, led by Sultan Mehmed II, defeated the Byzantine Empire, led by Emperor Constantine XI. The conquest of Constantinople marked the end of the Byzantine Empire and the rise of the Ottoman Empire as a major power in the Eastern Mediterranean."
            },
            {
                id: 35,
                name: "Battle of Blenheim",
                year: 1704,
                location: [48.61, 10.61],
                imageQuery: "battle of blenheim",
                description: "The Battle of Blenheim was fought on August 13, 1704, during the War of the Spanish Succession. The Allied forces, led by the Duke of Marlborough and Prince Eugene of Savoy, defeated the Franco-Bavarian army. This victory saved Vienna from French conquest and ensured the continuation of the Grand Alliance against Louis XIV of France."
            },
            
            // Modern Period (1800-1945)
            {
                id: 36,
                name: "Battle of Austerlitz",
                year: 1805,
                location: [49.13, 16.77],
                imageQuery: "battle of austerlitz",
                description: "The Battle of Austerlitz, also known as the Battle of the Three Emperors, was fought on December 2, 1805. Napoleon's Grande Armée decisively defeated the combined forces of the Russian Empire and the Holy Roman Empire. Widely regarded as Napoleon's greatest victory, it effectively knocked Austria out of the War of the Third Coalition."
            },
            {
                id: 37,
                name: "Battle of Borodino",
                year: 1812,
                location: [55.52, 35.82],
                imageQuery: "battle of borodino",
                description: "The Battle of Borodino was fought on September 7, 1812, during Napoleon's invasion of Russia. While technically a French victory, the battle was so costly that Napoleon's forces were significantly weakened, contributing to their disastrous retreat from Moscow and the collapse of the Grande Armée."
            },
            {
                id: 38,
                name: "Battle of Leipzig",
                year: 1813,
                location: [51.34, 12.39],
                imageQuery: "battle of leipzig",
                description: "The Battle of Leipzig, also known as the Battle of the Nations, was fought from October 16-19, 1813. It was the largest battle in Europe prior to World War I, involving over 600,000 soldiers. The coalition armies of Russia, Prussia, Austria, and Sweden decisively defeated Napoleon's forces, forcing France to retreat west of the Rhine River."
            },
            {
                id: 39,
                name: "Battle of Antietam",
                year: 1862,
                location: [39.47, -77.74],
                imageQuery: "battle of antietam",
                description: "The Battle of Antietam, also known as the Battle of Sharpsburg, was fought on September 17, 1862, during the American Civil War. It was the bloodiest single-day battle in American history, with about 23,000 casualties. The Union Army under General McClellan halted General Lee's invasion of Maryland, leading to President Lincoln's issuance of the Preliminary Emancipation Proclamation."
            },
            {
                id: 40,
                name: "Battle of Sedan",
                year: 1870,
                location: [49.7, 4.94],
                imageQuery: "battle of sedan 1870",
                description: "The Battle of Sedan was fought on September 1, 1870, during the Franco-Prussian War. The Prussian forces under Helmuth von Moltke the Elder decisively defeated the French Army under Emperor Napoleon III, who was captured along with his entire army. This battle effectively decided the war in Prussia's favor and led to the unification of Germany."
            },
            {
                id: 41,
                name: "Battle of Tsushima",
                year: 1905,
                location: [34.6, 129.38],
                imageQuery: "battle of tsushima",
                description: "The Battle of Tsushima was a major naval battle fought on May 27-28, 1905, during the Russo-Japanese War. The Japanese fleet under Admiral Tōgō Heihachirō destroyed the Russian Baltic Fleet under Admiral Zinovy Rozhestvensky. This decisive victory established Japan as a major naval power and contributed to the end of the war."
            },
            {
                id: 42,
                name: "Battle of the Somme",
                year: 1916,
                location: [50.01, 2.69],
                imageQuery: "battle of the somme",
                description: "The Battle of the Somme was one of the largest battles of World War I, fought between July 1 and November 18, 1916. British and French forces attempted to break through the German lines along the Somme River in France. The battle resulted in over a million casualties and became synonymous with the futility and horror of trench warfare."
            },
            {
                id: 43,
                name: "Battle of Jutland",
                year: 1916,
                location: [56.7, 6.08],
                imageQuery: "battle of jutland",
                description: "The Battle of Jutland was the largest naval battle of World War I, fought on May 31-June 1, 1916, in the North Sea near Denmark. The British Royal Navy engaged the Imperial German Navy in a major fleet action. While tactically inconclusive, the battle confirmed British naval dominance as the German High Seas Fleet never again challenged British control of the North Sea."
            },
            {
                id: 44,
                name: "Battle of El Alamein",
                year: 1942,
                location: [30.83, 28.95],
                imageQuery: "battle of el alamein",
                description: "The Second Battle of El Alamein was fought from October 23 to November 11, 1942, during World War II. British forces under General Bernard Montgomery decisively defeated the Axis forces under Field Marshal Erwin Rommel. The battle marked a turning point in the Western Desert Campaign and was the first major Allied victory of the war."
            },
            {
                id: 45,
                name: "Battle of Leyte Gulf",
                year: 1944,
                location: [11.0, 125.0],
                imageQuery: "battle of leyte gulf",
                description: "The Battle of Leyte Gulf was fought from October 23-26, 1944, during World War II. It is considered the largest naval battle in history, involving more than 200 ships across over 100,000 square miles of ocean. American and Australian forces decisively defeated the Japanese Combined Fleet, effectively destroying the Japanese Navy's capability for large-scale operations."
            },
            {
                id: 46,
                name: "Battle of Kursk",
                year: 1943,
                location: [51.76, 36.19],
                imageQuery: "battle of kursk",
                description: "The Battle of Kursk was a massive tank battle fought in July-August 1943 on the Eastern Front of World War II. It was the largest tank battle in history, involving around 6,000 tanks. The Soviet victory marked the strategic defeat of German forces on the Eastern Front and was a turning point in the war."
            },
            {
                id: 47,
                name: "Battle of Iwo Jima",
                year: 1945,
                location: [24.78, 141.32],
                imageQuery: "battle of iwo jima",
                description: "The Battle of Iwo Jima was a major battle where the United States Marine Corps and Navy landed on and eventually captured the island of Iwo Jima from the Imperial Japanese Army during World War II. The battle was immortalized by the photograph of six U.S. Marines raising the American flag on Mount Suribachi."
            },
            {
                id: 48,
                name: "Battle of Berlin",
                year: 1945,
                location: [52.52, 13.41],
                imageQuery: "battle of berlin 1945",
                description: "The Battle of Berlin was the final major offensive of the European theater of World War II. Starting on April 16, 1945, Soviet forces attacked Berlin from the east and south, while Allied forces were advancing from the west. The battle resulted in the suicide of Adolf Hitler, the surrender of Germany, and the end of the Nazi regime."
            },
            
            // Cold War and Modern Conflicts (1945-Present)
            {
                id: 49,
                name: "Battle of Dien Bien Phu",
                year: 1954,
                location: [21.38, 103.01],
                imageQuery: "battle of dien bien phu",
                description: "The Battle of Dien Bien Phu was the climactic confrontation of the First Indochina War between French Union forces and Viet Minh communist revolutionaries. The Viet Minh victory ended major French involvement in Indochina and led to the Geneva Accords, which partitioned Vietnam into North and South."
            },
            {
                id: 50,
                name: "Battle of Inchon",
                year: 1950,
                location: [37.48, 126.64],
                imageQuery: "battle of inchon",
                description: "The Battle of Inchon was an amphibious invasion and battle during the Korean War, resulting in a decisive victory for United Nations forces under the command of General Douglas MacArthur. The battle turned the tide of the war, forcing North Korean troops to retreat from their offensive into South Korea."
            },
            {
                id: 51,
                name: "Battle of Khe Sanh",
                year: 1968,
                location: [16.64, 106.73],
                imageQuery: "battle of khe sanh",
                description: "The Battle of Khe Sanh was conducted in northwestern Quảng Trị Province, South Vietnam, between January 21 and July 9, 1968, during the Vietnam War. The battle was fought between U.S. and South Vietnamese forces and those of North Vietnam. Though militarily a U.S. victory, the media coverage of the siege contributed to the American public's growing opposition to the war."
            },
            {
                id: 52,
                name: "Battle of 73 Easting",
                year: 1991,
                location: [30.97, 46.77],
                imageQuery: "battle of 73 easting",
                description: "The Battle of 73 Easting was a tank battle fought on February 26, 1991, during the Gulf War. It was a decisive victory for American-led Coalition forces, demonstrating the superiority of American equipment, training, and tactics over the Iraqi forces, and became one of the most studied tank battles since World War II."
            },
            {
                id: 53,
                name: "Battle of Mogadishu",
                year: 1993,
                location: [2.04, 45.31],
                imageQuery: "battle of mogadishu black hawk down",
                description: "The Battle of Mogadishu, also known as the Black Hawk Down incident, was part of Operation Gothic Serpent, fought on October 3-4, 1993, in Mogadishu, Somalia. U.S. forces attempted to capture faction leader Mohamed Farrah Aidid but were met with heavy resistance. The battle resulted in 18 American deaths and a shift in U.S. foreign policy regarding peacekeeping and intervention."
            },
            {
                id: 54,
                name: "Battle of Fallujah",
                year: 2004,
                location: [33.35, 43.79],
                imageQuery: "second battle of fallujah",
                description: "The Second Battle of Fallujah, code-named Operation Phantom Fury, was a joint American, Iraqi, and British offensive in November and December 2004. It was the most intense urban combat involving American forces since the Battle of Hue City in Vietnam, resulting in the deaths of over 1,000 insurgents and the capture of the insurgent-held city."
            },
            
            // Non-Western Battles
            {
                id: 55,
                name: "Battle of Talas",
                year: 751,
                location: [42.52, 72.24],
                imageQuery: "battle of talas",
                description: "The Battle of Talas was fought in 751 between the Abbasid Caliphate and the Tang dynasty of China. The Abbasid victory marked the end of Chinese expansion westward and is considered by some historians to be a significant moment in the spread of Islam in Central Asia. The battle is also notable for the capture of Chinese papermakers, leading to the transmission of papermaking technology to the West."
            },
            {
                id: 56,
                name: "Battle of Sekigahara",
                year: 1600,
                location: [35.36, 136.47],
                imageQuery: "battle of sekigahara",
                description: "The Battle of Sekigahara was fought on October 21, 1600, and was the decisive battle that established the Tokugawa shogunate in Japan. Tokugawa Ieyasu led the Eastern Army to victory over Ishida Mitsunari's Western Army, effectively ending the Warring States period and beginning the Edo period that lasted for over 260 years."
            },
            {
                id: 57,
                name: "Battle of Plassey",
                year: 1757,
                location: [23.8, 88.25],
                imageQuery: "battle of plassey",
                description: "The Battle of Plassey was fought on June 23, 1757, between the British East India Company and the Nawab of Bengal and his French allies. The British victory, secured through both military superiority and conspiracy with the Nawab's officers, established Company rule in Bengal and began British colonial dominance in India."
            },
            {
                id: 58,
                name: "Battle of Blood River",
                year: 1838,
                location: [-28.1, 30.54],
                imageQuery: "battle of blood river",
                description: "The Battle of Blood River was fought on December 16, 1838, between the Voortrekkers (Dutch-speaking settlers) and the Zulu Kingdom. The vastly outnumbered Voortrekkers, using firearms and defensive wagon formations, defeated the Zulu army. The battle played a significant role in the history of South Africa and Afrikaner nationalism."
            },
            {
                id: 59,
                name: "Battle of Adwa",
                year: 1896,
                location: [14.17, 38.9],
                imageQuery: "battle of adwa",
                description: "The Battle of Adwa was fought on March 1, 1896, between Ethiopia and Italy. The Ethiopian forces under Emperor Menelik II decisively defeated the Italian colonial army, securing Ethiopian sovereignty and making it the only African nation to successfully resist European colonization during the Scramble for Africa."
            },
            {
                id: 60,
                name: "Battle of Isandlwana",
                year: 1879,
                location: [-28.36, 30.65],
                imageQuery: "battle of isandlwana",
                description: "The Battle of Isandlwana was fought on January 22, 1879, during the Anglo-Zulu War. It was a decisive victory for the Zulu Kingdom over British imperial forces, despite the latter's technological advantages. It is considered one of the greatest defeats of the British Army against indigenous forces."
            },
            
            // Ancient Greece & Rome
            {
                id: 61,
                name: "Battle of Plataea",
                year: -479, // BCE
                location: [38.22, 23.27],
                imageQuery: "battle of plataea",
                description: "The Battle of Plataea was the final land battle during the second Persian invasion of Greece. It took place in 479 BCE near the city of Plataea in Boeotia. The Greek victory ended the Persian invasion and marked the beginning of a new phase in the Greco-Persian Wars, with the Greeks taking the offensive to free the Greek cities of Asia Minor."
            },
            {
                id: 62,
                name: "Battle of Zama",
                year: -202, // BCE
                location: [36.88, 9.75],
                imageQuery: "battle of zama",
                description: "The Battle of Zama was fought in 202 BCE near Zama, Tunisia. The Roman Republic forces led by Scipio Africanus decisively defeated the Carthaginian army led by Hannibal. This victory ended the Second Punic War and established Rome as the dominant power in the Western Mediterranean."
            },
            {
                id: 63,
                name: "Battle of Pharsalus",
                year: -48, // BCE
                location: [39.5, 22.33],
                imageQuery: "battle of pharsalus",
                description: "The Battle of Pharsalus was the decisive battle of Caesar's Civil War, fought on August 9, 48 BCE. Julius Caesar decisively defeated Pompey the Great, who fled to Egypt where he was later assassinated. This victory effectively ended the constitutional government of the Roman Republic, leading to Caesar's appointment as dictator and the rise of the Roman Empire."
            },
            {
                id: 64,
                name: "Battle of Cynoscephalae",
                year: -197, // BCE
                location: [39.42, 22.57],
                imageQuery: "battle of cynoscephalae",
                description: "The Battle of Cynoscephalae was fought in 197 BCE between the Roman army and the Macedonian army during the Second Macedonian War. The decisive Roman victory demonstrated the superiority of the flexible Roman legion over the rigid Macedonian phalanx, ending Macedonian military dominance in the eastern Mediterranean."
            },
            
            // Medieval & Renaissance Europe
            {
                id: 65,
                name: "Battle of Poitiers",
                year: 1356,
                location: [46.58, 0.34],
                imageQuery: "battle of poitiers 1356",
                description: "The Battle of Poitiers was fought on September 19, 1356, during the Hundred Years' War. The English forces under Edward, the Black Prince defeated the French army and captured King John II of France. This was the second of three major English victories in the Hundred Years' War."
            },
            {
                id: 66,
                name: "Battle of Grunwald",
                year: 1410,
                location: [53.49, 20.09],
                imageQuery: "battle of grunwald",
                description: "The Battle of Grunwald (or First Battle of Tannenberg) was fought on July 15, 1410, during the Polish–Lithuanian–Teutonic War. The alliance of the Kingdom of Poland and the Grand Duchy of Lithuania decisively defeated the Teutonic Knights. The battle is regarded as one of the most important in the history of Central and Eastern Europe."
            },
            {
                id: 67,
                name: "Battle of Mohács",
                year: 1526,
                location: [45.92, 18.65],
                imageQuery: "battle of mohacs",
                description: "The Battle of Mohács was fought on August 29, 1526, between the Kingdom of Hungary and the Ottoman Empire. The Ottomans, led by Sultan Suleiman the Magnificent, decisively defeated the Hungarians. The battle marked the end of the Hungarian monarchy, led to the partition of Hungary, and established Ottoman rule in the central part of the country for 150 years."
            },
            {
                id: 68,
                name: "Battle of Pavia",
                year: 1525,
                location: [45.18, 9.16],
                imageQuery: "battle of pavia",
                description: "The Battle of Pavia was fought on February 24, 1525, during the Italian War of 1521–1526. The Habsburg forces under Charles V decisively defeated the French army and captured King Francis I of France. The battle is significant as one of the first in which hand-held firearms played a decisive role on the battlefield."
            },
            
            // Asian and Middle Eastern Battles
            {
                id: 69,
                name: "Battle of Badr",
                year: 624,
                location: [24.48, 39.61],
                imageQuery: "battle of badr islam",
                description: "The Battle of Badr was fought on March 13, 624 CE, in present-day Saudi Arabia between the early Muslims led by Muhammad and the Meccan Quraysh tribe. Despite being outnumbered, the Muslims achieved a decisive victory. The battle is highly significant in Islamic history and is mentioned in the Quran as a divine victory."
            },
            {
                id: 70,
                name: "Battle of Yarmouk",
                year: 636,
                location: [32.66, 35.9],
                imageQuery: "battle of yarmouk",
                description: "The Battle of Yarmouk was fought in August 636 between the Byzantine Empire and the Rashidun Caliphate. The Muslim victory led to the conquest of the Levant and was a major step in the rapid Muslim expansion that occurred in the decades following Muhammad's death."
            },
            {
                id: 71,
                name: "Battle of Yamen",
                year: 1279,
                location: [22.09, 113.56],
                imageQuery: "battle of yamen",
                description: "The Battle of Yamen, fought on March 19, 1279, was the final battle between the Song dynasty and the Yuan dynasty in China. The Yuan forces led by general Zhang Hongfan defeated the Song forces, and the last Song emperor, the 8-year-old Emperor Huaizong, committed suicide, marking the end of the Song dynasty and the complete conquest of China by the Mongols."
            },
            {
                id: 72,
                name: "Battle of Dan-no-ura",
                year: 1185,
                location: [33.96, 130.94],
                imageQuery: "battle of dan no ura",
                description: "The Battle of Dan-no-ura was a major sea battle of the Genpei War, fought on April 25, 1185, in the Shimonoseki Strait in Japan. The Minamoto clan defeated the Taira clan, leading to the end of the Taira influence in Japanese politics and the establishment of the Kamakura shogunate, the first of Japan's military governments."
            },
            {
                id: 73,
                name: "Battle of Kawanakajima",
                year: 1561,
                location: [36.66, 138.25],
                imageQuery: "battle of kawanakajima",
                description: "The Battle of Kawanakajima was the fourth of five major battles fought between rival daimyō Takeda Shingen and Uesugi Kenshin in Japan. Fought on September 10, 1561, it is often considered one of the most famous and strategic battles of the Sengoku period, resulting in heavy casualties on both sides but no clear victor."
            },
            {
                id: 74,
                name: "Battle of Çaldıran",
                year: 1514,
                location: [39.07, 44.08],
                imageQuery: "battle of chaldiran",
                description: "The Battle of Çaldıran was fought on August 23, 1514, between the Ottoman Empire and the Safavid Empire. The Ottoman victory halted Safavid expansion into Anatolia and marked the first significant defeat of the Safavid Shah Ismail I. The battle is notable for the Ottoman use of firearms against the Safavid cavalry."
            },
            
            // American Battles
            {
                id: 75,
                name: "Battle of Bunker Hill",
                year: 1775,
                location: [42.38, -71.06],
                imageQuery: "battle of bunker hill",
                description: "The Battle of Bunker Hill was fought on June 17, 1775, during the early stages of the American Revolutionary War. Despite being a tactical victory for the British, they suffered heavy casualties, and the battle demonstrated that the colonial forces were able to stand up to the professional British army, boosting American morale."
            },
            {
                id: 76,
                name: "Battle of New Orleans",
                year: 1815,
                location: [29.97, -90.01],
                imageQuery: "battle of new orleans",
                description: "The Battle of New Orleans was fought on January 8, 1815, between the United States and Great Britain during the War of 1812. The American forces, led by General Andrew Jackson, decisively defeated the British. Ironically, the battle occurred after the signing of the Treaty of Ghent, which had officially ended the war, but before news of the peace treaty reached the combatants."
            },
            {
                id: 77,
                name: "Battle of San Jacinto",
                year: 1836,
                location: [29.75, -95.08],
                imageQuery: "battle of san jacinto texas",
                description: "The Battle of San Jacinto was fought on April 21, 1836, in present-day Harris County, Texas. The Texian Army, led by General Sam Houston, decisively defeated General Antonio López de Santa Anna's Mexican forces. The victory secured Texan independence from Mexico, leading to the establishment of the Republic of Texas."
            },
            {
                id: 78,
                name: "Battle of the Little Bighorn",
                year: 1876,
                location: [45.57, -107.43],
                imageQuery: "battle of little bighorn",
                description: "The Battle of the Little Bighorn, also known as Custer's Last Stand, was fought on June 25-26, 1876, between the 7th Cavalry Regiment of the United States Army and allied Native American tribes. The Native Americans, led by Sitting Bull and Crazy Horse, decisively defeated the U.S. forces led by Lt. Col. George Armstrong Custer, who was killed along with all the men under his direct command."
            },
            {
                id: 79,
                name: "Battle of Chapultepec",
                year: 1847,
                location: [19.42, -99.18],
                imageQuery: "battle of chapultepec",
                description: "The Battle of Chapultepec was fought on September 13, 1847, during the Mexican-American War. U.S. forces under General Winfield Scott captured Chapultepec Castle in Mexico City. The victory paved the way for the capture of Mexico City and effectively ended the war, leading to the Treaty of Guadalupe Hidalgo."
            },
            
            // World War I Battles
            {
                id: 80,
                name: "Battle of Tannenberg",
                year: 1914,
                location: [53.52, 20.15],
                imageQuery: "battle of tannenberg 1914",
                description: "The Battle of Tannenberg was fought between August 26-30, 1914, between Russia and Germany during World War I. The German 8th Army, commanded by Paul von Hindenburg and Erich Ludendorff, decisively defeated the Russian 2nd Army. The battle resulted in the almost complete destruction of the Russian army and established Hindenburg and Ludendorff as German national heroes."
            },
            {
                id: 81,
                name: "Battle of Gallipoli",
                year: 1915,
                location: [40.22, 26.28],
                imageQuery: "gallipoli campaign",
                description: "The Gallipoli Campaign was conducted between April 25, 1915, and January 9, 1916, in the Ottoman Empire during World War I. The Allied Powers attempted to control the sea route from Europe to Russia and take the Ottoman capital of Constantinople (Istanbul) but were defeated by Ottoman forces. The campaign was a defining moment for Australia and New Zealand, whose troops formed the ANZAC forces."
            },
            {
                id: 82,
                name: "Battle of Verdun",
                year: 1916,
                location: [49.21, 5.42],
                imageQuery: "battle of verdun",
                description: "The Battle of Verdun was fought from February 21 to December 18, 1916, on the Western Front in France during World War I. The longest battle of the war, Verdun saw massive casualties on both sides as the German and French armies fought for control of the fortress city of Verdun. The battle became a symbol of French determination and sacrifice."
            },
            {
                id: 83,
                name: "Battle of Passchendaele",
                year: 1917,
                location: [50.9, 2.99],
                imageQuery: "battle of passchendaele",
                description: "The Battle of Passchendaele, also known as the Third Battle of Ypres, was fought from July to November 1917 on the Western Front in Belgium during World War I. The battle is remembered for the extreme mud and the tremendous number of casualties suffered by both sides for minimal territorial gains."
            },
            
            // World War II Battles
            {
                id: 84,
                name: "Battle of Britain",
                year: 1940,
                location: [51.5, -0.1],
                imageQuery: "battle of britain air",
                description: "The Battle of Britain was a major air campaign fought over the United Kingdom in the summer and autumn of 1940. The Royal Air Force (RAF) successfully defended the UK against large-scale attacks by Nazi Germany's air force, the Luftwaffe. The battle was the first major military campaign to be fought entirely by air forces and was a crucial turning point in World War II."
            },
            {
                id: 85,
                name: "Battle of the Bulge",
                year: 1944,
                location: [50.25, 5.67],
                imageQuery: "battle of the bulge",
                description: "The Battle of the Bulge, also known as the Ardennes Counteroffensive, was a major German offensive campaign launched through the densely forested Ardennes region of Belgium, France, and Luxembourg on December 16, 1944. Despite initial success, the German forces were ultimately defeated, marking Hitler's last major offensive on the Western Front during World War II."
            },
            {
                id: 86,
                name: "Battle of Okinawa",
                year: 1945,
                location: [26.5, 128.0],
                imageQuery: "battle of okinawa",
                description: "The Battle of Okinawa, codenamed Operation Iceberg, was fought on the island of Okinawa in the Ryukyu Islands between April 1 and June 22, 1945. It was the largest amphibious assault in the Pacific War and the last major battle of World War II. The battle resulted in massive casualties on both sides and convinced American military planners of the potential bloodshed of an invasion of mainland Japan."
            },
            {
                id: 87,
                name: "Battle of Monte Cassino",
                year: 1944,
                location: [41.49, 13.82],
                imageQuery: "battle of monte cassino",
                description: "The Battle of Monte Cassino was a series of four assaults by the Allies against the Winter Line in Italy held by Axis forces during the Italian Campaign of World War II. The battle took place between January and May 1944, with the historic hilltop abbey of Monte Cassino being a key strongpoint in the German defensive line."
            },
            {
                id: 88,
                name: "Battle of Guadalcanal",
                year: 1942,
                location: [-9.6, 160.2],
                imageQuery: "battle of guadalcanal",
                description: "The Battle of Guadalcanal was a military campaign fought between August 7, 1942, and February 9, 1943, on and around the island of Guadalcanal in the Pacific during World War II. The Allied (primarily American) victory over the Japanese marked a turning point in the Pacific War and the beginning of a series of successful island-hopping campaigns that eventually led to Japan's defeat."
            },
            {
                id: 89,
                name: "Battle of Normandy",
                year: 1944,
                location: [49.34, -0.88],
                imageQuery: "d-day normandy",
                description: "The Battle of Normandy, codenamed Operation Overlord, began on June 6, 1944 (D-Day), when Allied forces landed on the beaches of Normandy in Nazi-occupied France. The battle continued until the end of August with the liberation of Paris. This massive invasion and subsequent campaign led to the Allied liberation of Western Europe from Nazi control."
            },
            {
                id: 90,
                name: "Battle of Coral Sea",
                year: 1942,
                location: [-15.0, 155.0],
                imageQuery: "battle of coral sea",
                description: "The Battle of the Coral Sea was fought from May 4-8, 1942, between the Imperial Japanese Navy and naval and air forces from the United States and Australia. It was the first air-sea battle in history where the opposing ships never fired directly upon one another. The battle is considered a strategic Allied victory as it prevented the Japanese from invading Port Moresby, which would have placed them in a position to invade Australia."
            },
            
            // Post-WWII Conflicts
            {
                id: 91,
                name: "Battle of Chosin Reservoir",
                year: 1950,
                location: [40.48, 127.22],
                imageQuery: "battle of chosin reservoir",
                description: "The Battle of Chosin Reservoir was fought from November 27 to December 13, 1950, during the Korean War. United Nations forces, primarily composed of U.S. Marines, fought a defensive action against the Chinese People's Volunteer Army. Despite being surrounded and outnumbered, the Marines broke out and made a fighting withdrawal, which has become one of the most storied exploits in Marine Corps history."
            },
            {
                id: 92,
                name: "Battle of Ia Drang",
                year: 1965,
                location: [13.6, 107.7],
                imageQuery: "battle of ia drang",
                description: "The Battle of Ia Drang was the first major engagement between the United States Army and the People's Army of Vietnam during the Vietnam War. Fought from November 14-18, 1965, it was the first large-scale helicopter air assault and the first use of B-52 strategic bombers in a tactical support role. Both sides claimed victory, but the battle set the pattern for how the Vietnam War would be fought."
            },
            {
                id: 93,
                name: "Six-Day War",
                year: 1967,
                location: [31.5, 35.0],
                imageQuery: "six day war 1967",
                description: "The Six-Day War was fought between June 5-10, 1967, between Israel and the neighboring states of Egypt, Jordan, and Syria. Israel's decisive victory included the capture of the Sinai Peninsula, Gaza Strip, West Bank, East Jerusalem, and Golan Heights, dramatically altering the geopolitical landscape of the Middle East and creating consequences that continue to affect the region today."
            },
            {
                id: 94,
                name: "Battle of Kuwait International Airport",
                year: 1991,
                location: [29.23, 47.97],
                imageQuery: "battle of kuwait international airport",
                description: "The Battle of Kuwait International Airport was fought on February 27, 1991, during the Persian Gulf War. It was a decisive tank battle between the United States Marine Corps and the Iraqi Army's 3rd Armored Division, resulting in a decisive American victory and contributing to the liberation of Kuwait from Iraqi occupation."
            },
            {
                id: 95,
                name: "Battle of Tora Bora",
                year: 2001,
                location: [34.12, 70.22],
                imageQuery: "battle of tora bora",
                description: "The Battle of Tora Bora was fought in December 2001 in the cave complex of Tora Bora in Afghanistan during the opening stages of the United States' invasion of Afghanistan. The battle was part of the War on Terror and was conducted by Coalition forces to capture or kill Osama bin Laden, the leader of Al-Qaeda."
            },
            
            // Ancient and Medieval Asian Battles
            {
                id: 96,
                name: "Battle of Gaixia",
                year: -202, // BCE
                location: [34.28, 117.28],
                imageQuery: "battle of gaixia",
                description: "The Battle of Gaixia was fought in 202 BCE between the forces of Liu Bang and Xiang Yu during the Chu-Han Contention. Liu Bang's victory marked the end of the conflict following the collapse of the Qin dynasty, leading to the establishment of the Han dynasty, one of China's most significant imperial dynasties."
            },
            {
                id: 97,
                name: "Battle of Tarain",
                year: 1192,
                location: [28.12, 76.80],
                imageQuery: "battle of tarain",
                description: "The Second Battle of Tarain was fought in 1192 between Muhammad of Ghor and Prithviraj Chauhan, a Rajput king who ruled much of present-day Rajasthan and Delhi in northern India. Muhammad Ghori's victory laid the foundation for Islamic rule in North India, which would later evolve into the Delhi Sultanate."
            },
            {
                id: 98,
                name: "Battle of Kalinga",
                year: -261, // BCE
                location: [20.26, 85.84],
                imageQuery: "battle of kalinga ashoka",
                description: "The Battle of Kalinga was fought around 261 BCE between the Mauryan Empire under Emperor Ashoka and the state of Kalinga (modern-day Odisha, India). Though Ashoka's forces were victorious, the extreme brutality and bloodshed of the battle led to Ashoka's conversion to Buddhism and his adoption of a policy of non-violence, profoundly changing the course of Indian history."
            },
            {
                id: 99,
                name: "Battle of Xiangyang",
                year: 1273,
                location: [32.02, 112.16],
                imageQuery: "battle of xiangyang",
                description: "The Battle of Xiangyang was a protracted siege conducted by the Yuan dynasty against the Southern Song dynasty from 1267 to 1273. The fall of Xiangyang was the critical step for the Mongols in their conquest of southern China, as it opened the middle Yangtze to their fleets. The battle is notable for being one of the first to use gunpowder weapons extensively."
            },
            {
                id: 100,
                name: "Battle of Poitiers",
                year: 732,
                location: [47.36, 0.71],
                imageQuery: "battle of tours charles martel",
                description: "The Battle of Poitiers (also known as the Battle of Tours) took place in October 732 between the Frankish and Burgundian forces under Charles Martel and an army of the Umayyad Caliphate. The Frankish victory is often credited with halting the northward advance of Islam from the Iberian peninsula into Western Europe."
            },
            {
                id: 101,
                name: "Battle of Panipat",
                year: 1526,
                location: [29.39, 76.97],
                imageQuery: "first battle of panipat",
                description: "The First Battle of Panipat was fought on April 21, 1526, between the invading forces of Babur, the Timurid king of Kabul, and the Lodi Empire. Babur's victory established the Mughal Empire in India, which would become one of the largest empires in Indian history and would last for over 300 years."
            },
            {
                id: 102,
                name: "Battle of Salamis",
                year: -480, // BCE
                location: [37.96, 23.54],
                imageQuery: "battle of salamis",
                description: "The Battle of Salamis was a naval battle fought between an alliance of Greek city-states and the Persian Empire in September 480 BCE. Despite being heavily outnumbered, the Greek fleet, through superior tactics and knowledge of local conditions, secured a decisive victory that marked a turning point in the Persian invasion of Greece."
            },
            {
                id: 103,
                name: "Battle of Yalu River",
                year: 1894,
                location: [39.83, 124.39],
                imageQuery: "battle of yalu river 1894",
                description: "The Battle of the Yalu River was the largest naval engagement of the First Sino-Japanese War, fought on September 17, 1894. The Japanese victory demonstrated the superiority of their modern fleet over the Chinese Beiyang Fleet and marked a pivotal moment in Japan's rise as a major naval power in East Asia."
            },
            {
                id: 104,
                name: "Battle of Kadesh",
                year: -1274, // BCE
                location: [34.57, 36.51],
                imageQuery: "battle of kadesh",
                description: "The Battle of Kadesh took place between the forces of the Egyptian Empire under Ramesses II and the Hittite Empire under Muwatalli II in 1274 BCE. This battle is notable for being one of the earliest battles in recorded history for which details of tactics and formations are known. It is also believed to have led to the world's first peace treaty."
            },
            {
                id: 105,
                name: "Battle of Crécy",
                year: 1346,
                location: [50.26, 1.89],
                imageQuery: "battle of crecy",
                description: "The Battle of Crécy was fought on August 26, 1346, during the Hundred Years' War. The English army, commanded by King Edward III, defeated the much larger French army led by King Philip VI. The battle is remembered for the effectiveness of the English longbow and is considered one of the most decisive battles in medieval warfare."
            },
            {
                id: 106,
                name: "Battle of Nagashino",
                year: 1575,
                location: [34.95, 137.58],
                imageQuery: "battle of nagashino",
                description: "The Battle of Nagashino was fought on June 28, 1575, between the forces of Oda Nobunaga and Tokugawa Ieyasu against the Takeda clan. The battle is famous for the use of arquebuses by the Oda-Tokugawa forces in a rotating volley, which devastated the charging Takeda cavalry and marked a turning point in Japanese warfare."
            }
        ];

        // Game state
        let gameState = {
            currentBattle: null,
            roundsPlayed: 0,
            totalRounds: 5,
            totalScore: 0,
            guessLocation: null,
            guessYear: null,
            map: null,
            marker: null,
            resultMap: null,
            originalMarker: null,
            guessMarker: null
        };

        // DOM Elements
        const splashScreen = document.getElementById('splashScreen');
        const gameArea = document.getElementById('gameArea');
        const resultArea = document.getElementById('resultArea');
        const endGameScreen = document.getElementById('endGameScreen');
        const startGameBtn = document.getElementById('startGameBtn');
        const submitGuessBtn = document.getElementById('submitGuessBtn');
        const nextRoundBtn = document.getElementById('nextRoundBtn');
        const endGameBtn = document.getElementById('endGameBtn');
        const playAgainBtn = document.getElementById('playAgainBtn');
        const yearGuessInput = document.getElementById('yearGuess');
        const locationSelected = document.getElementById('locationSelected');
        const roundNumber = document.getElementById('roundNumber');
        const totalScoreElement = document.getElementById('totalScore');
        const battleImage = document.getElementById('battleImage');
        const resultBattleImage = document.getElementById('resultBattleImage');
        const battleNameElement = document.getElementById('battleName');
        const battleYearElement = document.getElementById('battleYear');
        const battleDescriptionElement = document.getElementById('battleDescription');
        const distanceResultElement = document.getElementById('distanceResult');
        const yearResultElement = document.getElementById('yearResult');
        const locationProgressBar = document.getElementById('locationProgressBar');
        const yearProgressBar = document.getElementById('yearProgressBar');
        const roundScoreElement = document.getElementById('roundScore');
        const finalScoreElement = document.getElementById('finalScore');
        const scoreBreakdownElement = document.getElementById('scoreBreakdown');

        // Constants for scoring
        const MAX_DISTANCE_KM = 5000; // Maximum distance for scoring
        const MAX_YEAR_DIFF = 500; // Maximum year difference for scoring

        // Initialize map
        function initMap() {
            // Create game map
            gameState.map = L.map('map').setView([30, 10], 2);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19
            }).addTo(gameState.map);

            // Add click event to map
            gameState.map.on('click', function(e) {
                if (gameState.marker) {
                    gameState.map.removeLayer(gameState.marker);
                }
                
                gameState.guessLocation = [e.latlng.lat, e.latlng.lng];
                gameState.marker = L.marker(gameState.guessLocation).addTo(gameState.map);
                
                locationSelected.textContent = `Selected: ${e.latlng.lat.toFixed(2)}°, ${e.latlng.lng.toFixed(2)}°`;
            });
        }

        // Initialize result map
        function initResultMap() {
            if (gameState.resultMap) {
                gameState.resultMap.remove(); // Clean up existing map
            }
            gameState.resultMap = L.map('resultMap').setView([30, 10], 2);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19
            }).addTo(gameState.resultMap);
        }

        // Calculate distance between two points using Haversine formula
        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Earth's radius in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }

        // Format years to display BCE/CE
        function formatYear(year) {
            if (year < 0) {
                return Math.abs(year) + " BCE";
            } else {
                return year + " CE";
            }
        }

        // Start new game
        function startGame() {
            gameState.roundsPlayed = 0;
            gameState.totalScore = 0;
            startNewRound();
            
            // Reset the next round button text
            nextRoundBtn.textContent = 'Next Battle';
            
            // Remove any existing score message
            const existingScoreMessage = document.getElementById('scoreMessage');
            if (existingScoreMessage) {
                existingScoreMessage.remove();
            }
            
            splashScreen.style.display = 'none';
            endGameScreen.style.display = 'none';
            gameArea.style.display = 'block';
            resultArea.style.display = 'none';
            
            // Initialize map if not already done
            if (!gameState.map) {
                initMap();
            }
        }

        async function fetchBattleImage(battleName) {
            // Use a search term based on the battle name
            const searchTerm = encodeURIComponent(battleName.replace('Battle of ', ''));
            
            try {
                // Option 1: Using Unsplash API (requires API key)
                // const response = await fetch(`https://api.unsplash.com/photos/random?query=${searchTerm}+battle+historical&orientation=landscape`, {
                //     headers: {
                //         'Authorization': 'Client-ID YOUR_UNSPLASH_API_KEY'
                //     }
                // });
                // const data = await response.json();
                // return data.urls.regular;
                
                // Option 2: Using Wikimedia API (no API key required)
                const response = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}+battle&srnamespace=6&format=json&origin=*&srlimit=1`);
                const data = await response.json();
                
                if (data.query && data.query.search && data.query.search.length > 0) {
                    const title = data.query.search[0].title;
                    const encodedTitle = encodeURIComponent(title);
                    const imageInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodedTitle}&prop=imageinfo&iiprop=url&format=json&origin=*`;
                    
                    const imageResponse = await fetch(imageInfoUrl);
                    const imageData = await imageResponse.json();
                    const pages = imageData.query.pages;
                    const pageId = Object.keys(pages)[0];
                    
                    if (pages[pageId].imageinfo && pages[pageId].imageinfo.length > 0) {
                        return pages[pageId].imageinfo[0].url;
                    }
                }
                
                // Fallback to a placeholder if no image is found
                return `https://source.unsplash.com/800x500/?${searchTerm},battle,historical`;
            } catch (error) {
                console.error("Error fetching battle image:", error);
                return gameState.currentBattle.image; // Fallback to the original image path
            }
        }

        // Start a new round
        async function startNewRound() {
            // Reset state
            gameState.guessLocation = null;
            gameState.guessYear = null;
            yearGuessInput.value = '';
            locationSelected.textContent = 'No location selected yet';
            
            // Remove previous marker if exists
            if (gameState.marker) {
                gameState.map.removeLayer(gameState.marker);
                gameState.marker = null;
            }

            // Force map redraw
            setTimeout(() => {
                if (gameState.map) {
                    gameState.map.invalidateSize();
                }
            }, 100);
            
            // Select a random battle that hasn't been used in this game
            let availableBattles = battles.filter(battle => {
                return !gameState.usedBattles || !gameState.usedBattles.includes(battle.id);
            });
            
            // If all battles have been used or it's the first round, reset
            if (availableBattles.length === 0) {
                gameState.usedBattles = [];
                availableBattles = battles;
            }
            
            // Select random battle
            const randomIndex = Math.floor(Math.random() * availableBattles.length);
            gameState.currentBattle = availableBattles[randomIndex];
            
            // Track used battles
            if (!gameState.usedBattles) {
                gameState.usedBattles = [];
            }
            gameState.usedBattles.push(gameState.currentBattle.id);
            
            // Set a loading image
            battleImage.src = "images/Loading_icon.gif"; // Placeholder while loading
            
            // Try to fetch a dynamic image if the battle has an imageQuery
            try {
                const imageSrc = await fetchBattleImage(gameState.currentBattle.name);
                battleImage.src = imageSrc;
                // Store the fetched image URL so we can use it in the results screen
                gameState.currentBattle.fetchedImage = imageSrc;
            } catch (error) {
                console.error("Error loading image:", error);
                // Fall back to original image if available
                battleImage.src = gameState.currentBattle.image || "/api/placeholder/800/500";
            }
            
            // Update UI
            roundNumber.textContent = `Round ${gameState.roundsPlayed + 1}/${gameState.totalRounds}`;
            totalScoreElement.textContent = `Total Score: ${gameState.totalScore}`;
            
            // Reset map view
            if (gameState.map) {
                gameState.map.setView([30, 10], 2);
            }
        }

        // Submit guess
        function submitGuess() {
            gameState.guessYear = parseInt(yearGuessInput.value);
            
            // Validate inputs
            if (!gameState.guessLocation || isNaN(gameState.guessYear)) {
                alert('Please select a location on the map and enter a valid year.');
                return;
            }
            
            // Calculate distance
            const distance = calculateDistance(
                gameState.guessLocation[0],
                gameState.guessLocation[1],
                gameState.currentBattle.location[0],
                gameState.currentBattle.location[1]
            );
            
            // Calculate year difference
            const yearDiff = Math.abs(gameState.guessYear - gameState.currentBattle.year);
            
            // Calculate scores (0-100 for each category)
            const locationScore = Math.max(0, 100 - (distance / MAX_DISTANCE_KM * 100));
            const yearScore = Math.max(0, 100 - (yearDiff / MAX_YEAR_DIFF * 100));
            const roundScore = Math.round((locationScore + yearScore) / 2);
            
            // Update game state
            gameState.roundsPlayed++;
            gameState.totalScore += roundScore;
            
            // Update UI for results
            battleNameElement.textContent = gameState.currentBattle.name;
            battleYearElement.textContent = `Year: ${formatYear(gameState.currentBattle.year)}`;
            resultBattleImage.src = gameState.currentBattle.fetchedImage || gameState.currentBattle.image;
            battleDescriptionElement.textContent = gameState.currentBattle.description;
            
            distanceResultElement.textContent = `${Math.round(distance)} km away`;
            yearResultElement.textContent = `${yearDiff} years off`;
            locationProgressBar.style.width = `${locationScore}%`;
            yearProgressBar.style.width = `${yearScore}%`;
            roundScoreElement.textContent = roundScore;
            
            // Color the progress bars based on score
            if (locationScore > 75) {
                locationProgressBar.style.backgroundColor = '#10b981'; // green
            } else if (locationScore > 50) {
                locationProgressBar.style.backgroundColor = '#f59e0b'; // orange
            } else {
                locationProgressBar.style.backgroundColor = '#ef4444'; // red
            }
            
            if (yearScore > 75) {
                yearProgressBar.style.backgroundColor = '#10b981'; // green
            } else if (yearScore > 50) {
                yearProgressBar.style.backgroundColor = '#f59e0b'; // orange
            } else {
                yearProgressBar.style.backgroundColor = '#ef4444'; // red
            }
            
            // Initialize result map if needed
            initResultMap(); // Always reinitialize to clear previous markers
            
            // Clear any existing markers and lines
            if (gameState.originalMarker) {
                gameState.resultMap.removeLayer(gameState.originalMarker);
                gameState.originalMarker = null;
            }
            if (gameState.guessMarker) {
                gameState.resultMap.removeLayer(gameState.guessMarker);
                gameState.guessMarker = null;
            }
            if (gameState.resultLine) {
                gameState.resultMap.removeLayer(gameState.resultLine);
                gameState.resultLine = null;
            }
            
            // Add markers for actual and guessed locations
            gameState.originalMarker = L.marker(gameState.currentBattle.location, {
                icon: L.divIcon({
                    className: 'actual-location-marker',
                    html: '<div style="background-color: green; border-radius: 50%; width: 20px; height: 20px; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                })
            }).addTo(gameState.resultMap).bindPopup('Actual location');
            
            gameState.guessMarker = L.marker(gameState.guessLocation, {
                icon: L.divIcon({
                    className: 'guess-location-marker',
                    html: '<div style="background-color: red; border-radius: 50%; width: 20px; height: 20px; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                })
            }).addTo(gameState.resultMap).bindPopup('Your guess');
            
            // Draw line between actual and guess
            if (gameState.resultLine) {
                gameState.resultMap.removeLayer(gameState.resultLine);
            }
            gameState.resultLine = L.polyline([
                gameState.currentBattle.location,
                gameState.guessLocation
            ], { color: 'red', dashArray: '5, 10' }).addTo(gameState.resultMap);
            
            // Adjust map to show both points
            const bounds = L.latLngBounds(gameState.currentBattle.location, gameState.guessLocation);
            gameState.resultMap.fitBounds(bounds, { padding: [50, 50] });
            
            // Switch to result screen
            gameArea.style.display = 'none';
            resultArea.style.display = 'block';

            // Check if game is over
            if (gameState.roundsPlayed >= gameState.totalRounds) {
                nextRoundBtn.textContent = 'See Final Score';
            }

            // Force map redraw after display change
            setTimeout(() => {
                gameState.resultMap.invalidateSize();
                gameState.resultMap.fitBounds(bounds, { padding: [50, 50] });
            }, 100);
        }

        // Handle next round
        function nextRound() {
            // Check if game is over
            if (gameState.roundsPlayed >= gameState.totalRounds) {
                showEndGame();
                return;
            }
            
            // Start new round
            startNewRound();
            
            // Switch back to game screen
            resultArea.style.display = 'none';
            gameArea.style.display = 'block';
        }

        // Show end game screen
        function showEndGame() {
            const averageScore = Math.round(gameState.totalScore / gameState.totalRounds);
            
            finalScoreElement.textContent = gameState.totalScore;
            scoreBreakdownElement.textContent = `Average score per round: ${averageScore}`;
            
            // Remove any existing score message
            const existingScoreMessage = document.getElementById('scoreMessage');
            if (existingScoreMessage) {
                existingScoreMessage.remove();
            }
            
            // Display different message based on score
            let message = '';
            if (averageScore >= 80) {
                message = 'Exceptional! You\'re a history master!';
            } else if (averageScore >= 60) {
                message = 'Well done! You know your battles!';
            } else if (averageScore >= 40) {
                message = 'Not bad! Keep studying those history books!';
            } else {
                message = 'Room for improvement. Try again!';
            }
            
            // Add the message with an ID so we can remove it later
            document.getElementById('scoreBreakdown').insertAdjacentHTML('afterend', 
                `<p id="scoreMessage" class="mb-4">${message}</p>`);
            
            // Show end game screen
            gameArea.style.display = 'none';
            resultArea.style.display = 'none';
            endGameScreen.style.display = 'block';
        }

        // Event listeners
        startGameBtn.addEventListener('click', startGame);
        submitGuessBtn.addEventListener('click', submitGuess);
        nextRoundBtn.addEventListener('click', nextRound);
        endGameBtn.addEventListener('click', showEndGame);
        playAgainBtn.addEventListener('click', startGame);

        // Initialize the game
        document.addEventListener('DOMContentLoaded', function() {
            // Do nothing, wait for user to click start
        });
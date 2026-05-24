const { Telegraf, Markup } = require('telegraf');

// ضع توكن البوت الخاص بك هنا
const BOT_TOKEN = '8360020164:AAE9RYF9pQwi9007JVt6y0dnAcuF6Ec4pxA';
const bot = new Telegraf(BOT_TOKEN);

// القائمة الرئيسية بأزرار إنلاين (Inline) فخمة
const mainInlineKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback('⚔️ أفضل شخصيات الهجوم', 'menu_attack'),
        Markup.button.callback('❤️ أفضل شخصيات الريفايف', 'menu_revive')
    ],
    [
        Markup.button.callback('👑 كومبوهات الـ PvP الأسطورية', 'menu_combos'),
        Markup.button.callback('ℹ️ حول البوت', 'menu_about')
    ]
]);

// زر العودة للقائمة الرئيسية
const backButton = Markup.inlineKeyboard([
    [Markup.button.callback('🔙 العودة للقائمة الرئيسية', 'main_menu')]
]);

// الترحيب عند بدء البوت
bot.start((ctx) => {
    ctx.replyWithMarkdown(`🔥 *أهلاً بك يا ${ctx.from.first_name} في بوت التكتيكات الجبار لفري فاير!* 🔥\n\nاختر من الأزرار بالأسفل لتفجير الميتا ومعرفة أقوى الشخصيات والكومبوهات:`, mainInlineKeyboard);
});

// معالجة العودة للقائمة الرئيسية
bot.action('main_menu', async (ctx) => {
    try {
        await ctx.editMessageText('🔥 *اختر التصنيف التكتيكي الذي تريده:*', {
            parse_mode: 'Markdown',
            ...mainInlineKeyboard
        });
    } catch (e) { console.log(e); }
});

// 1. قسم الهجوم (Attack)
bot.action('menu_attack', async (ctx) => {
    const attackText = `
⚔️ **أقوى شخصيات الهجوم والـ Rush التدميرية:**

• **Tatsuya (تاتسويا):** الاندفاع الخاطف مرتين متتاليتين. كسر المسافات، مفاجأة الخصم خلف الثلج، والهروب السريع.
• **Hayato (هاياتو المطور):** وحش الفايت المباشر. كلما نقص دمك بنسبة 10%، زاد اختراق درع الخصم! زبدة دمج الأسلحة.
• **Wukong (القرود):** التمويه المثالي. تقتل خصم، يتصفّر وقت المهارة، تتحول لعشبة فوراً وتغدر بالثاني. ملك الـ 1v4.
• **Alok (ألوك المطور):** سرعة حركة تزيد من دقة الـ One Tap مع استعادة مستمرة للدم وسط الفايت.
    `;
    try {
        await ctx.editMessageText(attackText, { parse_mode: 'Markdown', ...backButton });
    } catch (e) { console.log(e); }
});

// 2. قسم الريفايف (Revive)
bot.action('menu_revive', async (ctx) => {
    const reviveText = `
❤️ **ملوك الدعم والريفايف الخارق (الإنقاذ المستحيل):**

• **Dimitri (ديميتري):** يصنع هالة بقطر 3.5 متر تقوم بعمل ريفايف ذاتي لك ولخوياك بدون ما تلمسهم!
• **Thiva (ثيفا):** مهارة سلبية ترفع خويك الطايح أسرع بنسبة 70%! يعني في ثانية واحدة خويك يرجع واقف على رجوله.
• **Olivia (أوليفيا):** مهارة الشفاء المشترك. لما تعطي ريفايف أو خويك يقوم داخل هالة ديميتري، يحصل على 80 HP فوري وتتوزع على السكواد القريب!
• **Kapella (كابيلا):** تقلل من سرعة نزيف دم الصديق الساقط بنسبة 35% وتزيد من كفاءة أدوات العلاج.
    `;
    try {
        await ctx.editMessageText(reviveText, { parse_mode: 'Markdown', ...backButton });
    } catch (e) { console.log(e); }
});

// 3. قسم الكومبوهات الأسطورية (Combos)
bot.action('menu_combos', async (ctx) => {
    const combosText = `
👑 **الـ Combos الجبارة المعتمدة في البطولات والـ PvP:**

🏥 **1. كومبو "السكواد الخالد" (الريفايف المطلق):**
👈 \`Dimitri + Thiva + Olivia + Sonia\`
> **التكتيك:** إذا طاح خويك نوك، شغل ديميتري؛ ثيفا بيقومه بلمحة عين، وأوليفيا بتعطيه دم فل فوراً. وسونيا تعطيك فرصة ثانية قبل ما تطيح نوك لتنقذ الموقف!

⚡ **2. كومبو "سفاح المستودع والراش" (PvP 1v1):**
👈 \`Tatsuya + Hayato + Kelly + Jota\`
> **التكتيك:** سرعة كلي مع اندفاع تاتسويا تخليك بظهر الخصم بثانية، واختراق درع هاياتو يضمن لك الهيدشوت أو الدمج العالي، وجوتا يعوض دمك فوراً مع كل كيل بدون ما توقف تعالج.

🛡️ **3. كومبو "الصخرة الصامدة" (الدفاع والهجوم العكسي):**
👈 \`Chrono + Andrew + Wolfrahh + Hayato\`
> **التكتيك:** أندرو يحميك من دمج الدرع، وولفراه يقلل ضرر الهيدشوت عليك ويزيد دمجك لخصومك، وإذا انحشرت شغل كرونو واقلب الفايت لصالحك.
    `;
    try {
        await ctx.editMessageText(combosText, { parse_mode: 'Markdown', ...backButton });
    } catch (e) { console.log(e); }
});

// 4. حول البوت
bot.action('menu_about', async (ctx) => {
    try {
        await ctx.editMessageText('🕹️ **بوت التكتيكات الاحترافي:** تم تطويره ليعطيك زبدة الميتا والخطط الإستراتيجية في فري فاير لتسحق الخصوم بذكاء وسرعة بديهة.', {
            parse_mode: 'Markdown',
            ...backButton
        });
    } catch (e) { console.log(e); }
});

// تشغيل البوت
bot.launch().then(() => {
    console.log('🚀 البوت الجبار شغال الحين على أزرار الإنلاين!');
});

// إغلاق آمن
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


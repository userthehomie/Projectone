const menubtn = document.getElementById('menu');
const closebtn = document.getElementById('close');
const barmenu = document.getElementById('barmenu');
menubtn.addEventListener('click', function () {
    barmenu.classList.toggle("active");
})
closebtn.addEventListener('click', function () {
    barmenu.classList.remove("active")
})

let switcher = document.getElementById('langswitch');
let title = document.getElementById('title');
let buttonone = document.getElementById('buttonone');
let buynowbutton = document.getElementById('buynow');
let titletwo = document.getElementById('titletwo');
let pnumberone = document.getElementById('pnumberone');
let change = document.getElementById('change');
let pnumbertwo = document.getElementById('pnumbertwo');
let changetwo = document.getElementById('changetwo');
let pnumberthree = document.getElementById('pnumberthree');
let contact = document.getElementById('contact');
let pnumberfour = document.getElementById('pnumberfour');
let about = document.getElementById('about');
let snapchat = document.getElementById('snapchat');
let whatsapp = document.getElementById('whatsapp');
let youtube = document.getElementById('youtube');
let instagram = document.getElementById('instagram');
let copyright = document.getElementById('copyright');
let pcopyright = document.getElementById('pcopyright');
let barmenuh3 = document.getElementById('barmenuh3');
let barmenup = document.getElementById('barmenup');
let pnumberbuy = document.getElementById('pnumberbuy');
let awhatsapplink = document.getElementById('awhatsapplink');


switcher.onchange = function () {
    if (this.value === "ar") {
        title.textContent = 'أنا هي حسناء بايداني مرحبا بيك فالموقع ديالي..!';
        title.style.direction = 'rtl';
        buttonone.textContent = 'تعرف عليا كثر';
        buttonone.style.direction = 'rtl';
        buynowbutton.textContent = 'بغيتي تشري شي كتاب؟';
        buynowbutton.direction = 'rtl';
        titletwo.textContent = 'شكون هي حسناء بادياني؟';
        titletwo.style.direction = 'rtl';
        pnumberone.style.direction = 'rtl'
        pnumberone.textContent = ' حسناء بايداني كاتبة شغوفة كتمتالك حس ابداعي فسرد القصص كتسعى من خلال الكتب ديالها الى ايصال أفكار عميقةوتلمس بيهم مشاعر القراء كتهتم بتقديم محتوى أدبي كيجمع بين البساطة والعمق وتطمح لترك اثر مميز في عالم الكتابة. المهم مرحبا بيك عندي فالموقع. ';
        change.textContent = 'كنأمن بالتغيير من اليوم غير فكر بحرية.';
        change.style.direction = 'rtl';
        pnumbertwo.textContent = 'احلام صعيب تحقق ولكن بالمثابرة والانضباط غاتحقق !';
        pnumbertwo.style.direction = 'rtl';
        changetwo.textContent = 'واش يمكن بصح نخرج من هاد الأفكار؟';
        changetwo.style.direction = 'rtl';
        pnumberthree.textContent = 'اه يمكن بمجرد انه تكون عندك نفسية قوية يمكن ليك بيها تغير هاد العالم.';
        pnumberthree.style.direction = 'rtl';
        contact.textContent = 'بغيتي تواصل معايا؟';
        contact.style.direction = 'rtl';
        pnumberfour.style.direction = 'rtl';
        pnumberfour.textContent = 'مرحبا بيك عندي ف مواقع التواصل عندي.';
        about.textContent = ' هذا الموقع صممته لشخص اقدره واحبه فعلا او ما كنت لاهتم اصلا المهم لم ابذل قصارى جهدي في هذا العمل نضرا لبعض الضروف وكنت اريده جاهزا في وقت محدد المهم هذا العلم هدية مني لصديقتي حسناء ولو كنت تريد صنع موقع شخصي مثل هذا ما عليك سىو التواصل معي وشكرا على وقتك.'
        about.style.direction = 'rtl';
        snapchat.textContent = 'سنابشات ديالي';
        snapchat.style.direction = 'rtl';
        whatsapp.textContent = 'واتساب ديالي';
        whatsapp.style.direction = 'rtl';
        instagram.textContent = 'انستغرام ديالي';
        instagram.style.direction = 'rtl';
        youtube.style.direction = 'rtl';
        youtube.textContent = 'يوتيوب ديالي';
        copyright.textContent = 'هذا الموقع مصصم من طرف عبد السلام ملاك او المعروف ب Deckwick.';
        copyright.style.direction = 'rtl';
        pcopyright.style.direction = 'rtl';
        pcopyright.textContent = ' © موقع حسناء جميع الحقوق محفوضة 2026.';
        barmenuh3.textContent = 'حسناء بايداني';
             barmenuh3.style.direction = 'rtl';
        barmenup.style.direction = 'rtl';
        barmenup.textContent = 'كاتبة ومؤلفة قصص وروايات خيالية';
        pnumberbuy.style.direction = 'rtl';
        pnumberbuy.textContent = 'مرحبا بيك غير تواصل معايا على واتساب.';
        awhatsapplink.style.direction = 'rtl';
        awhatsapplink.textContent = 'واتساب'


    }
    else {
        title.textContent = 'Hey! i am Hasna baydani a writer Welcome to my website.';
        title.style.direction = 'ltr';
        title.style.textTransform = 'capitalize';
        buttonone.textContent = 'More about me';
        buttonone.style.direction = 'ltr';
        buynowbutton.textContent = 'Wanna buy a book?';
        buynowbutton.style.direction = 'ltr';
        titletwo.textContent = 'Who is Hasna Baydani ?';
        titletwo.style.direction = 'ltr';
        pnumberone.style.direction = 'ltr'
        pnumberone.textContent = 'Hasna baydani a passion writer who has a creative mindset for telling stories she try to reach from her books to message a deep ideas and touch the feelings of readers, she interest with gaving a phylosofique content and she hoping to leave a good lead on the planet. whatever welcome to my website.';
        change.textContent = 'i bilieve changing from today!';
        change.style.direction = 'ltr';
        change.style.paddingLeft = '15px';
        pnumbertwo.textContent = 'Dreams its hard to become truth but with descipline it can be real.';
        pnumbertwo.style.direction = 'ltr';
        changetwo.textContent = 'Can you get out of this ideas?';
        changetwo.style.direction = 'ltr';
        pnumberthree.innerHTML = 'Yes you can just by having a powerful mindset with it you can change the world.';
        pnumberthree.style.direction = 'ltr';
        contact.textContent = 'You wanna contact me?';
        contact.style.direction = 'ltr';
        pnumberfour.style.direction = 'ltr';
        pnumberfour.textContent = 'Welcome to my social media accounts. ';
        about.textContent = 'i biuld this website for a person who i really love and care about, i didnt put my whole effort on this project cause of some reasons like time and short period i want him to finish whatever this website is a gift for my friend Hasna and if you wanna create your own website just contact me.';
        about.style.direction = 'ltr';
        snapchat.textContent = 'My SnapChat';
        snapchat.style.direction = 'ltr';
        whatsapp.textContent = 'My WhatsApp';
        whatsapp.style.direction = 'ltr';
        instagram.textContent = 'My Instagram';
        instagram.style.direction = 'ltr';
        youtube.style.direction = 'ltr';
        youtube.textContent = 'My Youtube';
        copyright.textContent = 'This website is designed by Abdulsalam Malak or know as Deckwick.'
        copyright.style.direction='ltr';
        pcopyright.textContent = 'Hasna website all copyright reserved 2026 ©';
        pcopyright.style.direction = 'ltr';
        barmenuh3.textContent = 'Hasna Baydani';
        barmenuh3.style.direction = 'ltr';
        barmenup.style.direction  = 'ltr';
        barmenup.textContent = 'Creative writer create books and stories.';
        pnumberbuy.style.direction ='ltr';
        pnumberbuy.textContent = 'Welcome just contact me on whatsapp.'
        awhatsapplink.style.direction = 'ltr';
        awhatsapplink.textContent = 'Whatsapp';


    }
}

buttonone.addEventListener('click', function(){
    buynowbutton.scrollIntoView({
        behavior: "smooth"
    })
})
buynowbutton.addEventListener('click', function(){

})
let buynowdiv = document.getElementById('buynowdiv');

let closebuy = document.getElementById('closebuynow').addEventListener('click', function(){
    buynowdiv.style.display = 'none';
})
buynowbutton.addEventListener('click', function(){
    buynowdiv.style.display ='flex';
    buynowdiv.style.flexDirection = 'column';
    buynowdiv.style.alignItems = 'center';
    buynowdiv.style.justifyContent = 'center'

})
<script>
    import { each } from "svelte/internal";
    let faq = [
        [
            "What is Netflix?", 

            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. \nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"], 
        [ 
            "How much does Netflix cost?",

            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from THB99 to THB419 a month. No extra costs, no contracts."],

        [
            "Where can I watch?",

            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."],

        [
            "How do I cancel?",

            "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."],

        [
            "What can I watch on Netflix?",

            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."],
        [
            "Is Netflix good for kids?", 
        
            "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."]
        ]
    console.log(faq);
    // window["qa"] = faq
</script>


<head>
    <title>Netflix Thailand - Watch TV Shows Online, Watch Movies Online</title>
</head>

<body class="m-0 p-0 w-full">
    <header class="header-bg">
        <nav class="m-0 my-4 w-full inline-block">
            <a href="#">
                <img class="float-left h-12 w-auto m-4" src="logo.png" alt="img not found"></a>
            <div class="float-right m-4">
                <button class="bg-gray-800 text-white p-2 mx-2 rounded">
                    English</button>
                <button class="bg-red-600 text-white p-2 mx-2 rounded">
                    Sign In</button>
            </div>
        </nav>
        <div class="mx-auto relative block top-36 text-center" style="width: 900px;">
            <h1 class="w-3/4 text-6xl font-bold mx-auto text-white">
                Unlimited movies, TV shows, and more.</h1>
            <h3 class="text-2xl font-medium mx-auto my-5 text-white">
                Watch anywhere. Cancel anytime.</h3>
            <h4 class="text-lg font-normal mx-auto my-5 text-white">
                Ready to watch? Enter your email to create or restart your membership.</h4>
            <div>
                <input type="text" name="email" id="" class="inline h-16 w-3/5 m-0 p-0 indent-3">
                <button class="inline text-lg font-medium bg-red-600 text-white w-36 h-16 m-0 p-0">
                    Get Started ></button>
            </div>
            
        </div>
    </header>
    <div class="section-line"></div>

    <div class="w-full p-40 bg-gray-900">
        <div class="max-w-2xl inline-block left-36 relative">
            <h1 class="text-6xl font-medium my-8 mx-0 w-5/6 text-white">
                Enjoy on your TV.
            </h1>
            <h3 class="text-2xl font-normal my-8 mx-0 w-5/6  text-white">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </h3>
        </div>
        <img class="h-64 inline-block float-right relative right-36" src="card-1.jpg" alt="">
    </div>
    <div class="section-line"></div>

    <div class="w-full p-40 bg-gray-900">
        <img class="h-64 inline-block relative left-40" src="card-2.jpg" alt="">
        <div class="max-w-2xl inline-block relative right-42 float-right">
            <h1 class="text-6xl font-medium my-8  text-white">
                Download your shows to watch offline.
            </h1>
            <h3 class="text-2xl font-normal my-8 w-5/6  text-white">
                Save your favorites easily and always have something to watch.
            </h3>
        </div>
    </div>
    <div class="section-line"></div>

    <div class="w-full p-40 py-32 bg-gray-900">
        <div class="max-w-2xl inline-block left-36 relative">
            <h1 class="text-6xl font-medium my-8 mx-0 w-5/6 text-white">
                Watch everywhere.
            </h1>
            <h3 class="text-2xl font-normal my-8 mx-0 w-5/6  text-white">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </h3>
        </div>
        <!-- <img class="h-64 inline-block float-right relative right-36" src="card-1.jpg" alt=""> -->
    </div>
    <div class="section-line"></div>

    <div class="w-full p-40 py-32 bg-gray-900">
        <h1 class="mx-auto text-6xl font-medium my-8 w-5/6 text-white text-center">
            Frequently Asked Question
        </h1>
        <div class="my-8">
            {#each faq as qa}
                <div class="my-2 max-w-screen-md">
                    <button class="w-2/3">
                        {qa[0]}
                    </button>
                </div>
            {/each}
        </div>
        

    </div>



</body>

<style>
    .header-bg{
        height: 700px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image:
            linear-gradient(to bottom, #000000DD, #00000040),
            url("../assets/background.jpg");
    }
    .section-line{
        width: 100%;
        background-color: rgb(114, 114, 114);
        height: 5px;
    }

</style>
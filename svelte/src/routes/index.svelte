<script>
	import { children, each, toggle_class } from 'svelte/internal';
	let faqs = [
		{
			active: false,
			height: 232,
			title:'What is Netflix?',
            detail: 	
				"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. \nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
		},
		{
			active: false,
			height: 148,
			title:'How much does Netflix cost?',
            detail: 	
				'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from THB99 to THB419 a month. No extra costs, no contracts.'
		},
		{
			active: false,
			height: 260,
			title:'Where can I watch?',
            detail: 	
				"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
		},
		{
			active: false,
			height: 148,
			title:'How do I cancel?',
            detail: 	
				'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
		},
		{
			active: false,
			height: 148,
			title:'What can I watch on Netflix?',
            detail: 	
				'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
		},
		{
			active: false,
			height: 204,
			title:'Is Netflix good for kids?',
            detail: 	
				'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
		}
	];
</script>

<head>
	<title>Netflix Thailand - Watch TV Shows Online, Watch Movies Online</title>
</head>

<body class="m-0 p-0 w-full">
	<header class="header-bg">
		<nav class="m-0 my-4 w-full inline-block">
			<a href="#"> <img class="float-left h-12 w-auto m-4" src="logo.png" alt="img not found" /></a>
			<div class="float-right m-4">
				<button class="bg-gray-800 text-white p-2 mx-2 rounded"> English</button>
				<button class="bg-red-600 text-white p-2 mx-2 rounded"> Sign In</button>
			</div>
		</nav>
		<div class="mx-auto relative block top-36 text-center" style="width: 900px;">
			<h1 class="w-3/4 text-6xl font-bold mx-auto text-white">
				Unlimited movies, TV shows, and more.
			</h1>
			<h3 class="text-2xl font-medium mx-auto my-5 text-white">Watch anywhere. Cancel anytime.</h3>
			<h4 class="text-lg font-normal mx-auto my-5 text-white">
				Ready to watch? Enter your email to create or restart your membership.
			</h4>
			<div>
				<input type="text" name="email" id="" class="inline h-16 w-3/5 m-0 p-0 indent-3" />
				<button class="inline text-lg font-medium bg-red-600 text-white w-36 h-16 m-0 p-0">
					Get Started ></button
				>
			</div>
		</div>
	</header>
	<div class="section-line" />

	<div class="w-full p-40 bg-gray-900">
		<div class="max-w-2xl inline-block left-36 relative">
			<h1 class="text-6xl font-medium my-8 mx-0 w-5/6 text-white">Enjoy on your TV.</h1>
			<h3 class="text-2xl font-normal my-8 mx-0 w-5/6  text-white">
				Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
			</h3>
		</div>
		<img class="h-64 inline-block float-right relative right-36" src="card-1.jpg" alt="" />
	</div>
	<div class="section-line" />

	<div class="w-full p-40 bg-gray-900">
		<img class="h-64 inline-block relative left-40" src="card-2.jpg" alt="" />
		<div class="max-w-2xl inline-block relative right-42 float-right">
			<h1 class="text-6xl font-medium my-8  text-white">Download your shows to watch offline.</h1>
			<h3 class="text-2xl font-normal my-8 w-5/6  text-white">
				Save your favorites easily and always have something to watch.
			</h3>
		</div>
	</div>
	<div class="section-line" />

	<div class="w-full p-40 py-32 bg-gray-900">
		<div class="max-w-2xl inline-block left-36 relative">
			<h1 class="text-6xl font-medium my-8 mx-0 w-5/6 text-white">Watch everywhere.</h1>
			<h3 class="text-2xl font-normal my-8 mx-0 w-5/6  text-white">
				Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
			</h3>
		</div>
	</div>
	<div class="section-line" />

	<div class="w-full p-40 py-32 bg-gray-900">
		<h1 class="mx-auto text-6xl font-medium my-8 w-5/6 text-white text-center">
			Frequently Asked Question
		</h1>
		<ul class="my-10 max-w-screen-md w-7/8 mx-auto">
			{#each faqs as faq}
				<li class="my-2 faq">
					<button
						class="w-full text-left indent-8 bg-gray-600 border-b-2 border-black text-white h-20 text-3xl inline-block "
						on:click={ () => {
							faq.active = !faq.active 
                            faqs = faqs
						}}
					>
						{faq.title}
						<div class="drop inline-block float-right right-8 relative">
                            {faq.active? "+" : "x"}
                        </div>
					</button>
					<div class="detail  overflow-hidden bg-gray-600" style="height:{faq.active? faq.height: 0}px">
						<p class=" text-white p-8 text-xl ">
							{faq.detail}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</body>

<style>
	.header-bg {
		height: 700px;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: linear-gradient(to bottom, #000000dd, #00000040),
			url('../assets/background.jpg');
	}
	.section-line {
		width: 100%;
		background-color: rgb(114, 114, 114);
		height: 5px;
	}
	.detail {
		transition: all 0.5s ease;
		margin: 0;
		padding: 0 1rem;
	}

</style>

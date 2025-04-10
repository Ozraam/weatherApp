<script lang="ts">
    import logo from "$lib/assets/logo.webp";
    import WiDayCloudy from "$lib/assets/WiDayCloudy.svg";

    const links = [
        {
            name: "Weather",
            icon: WiDayCloudy,
            href: "/",
        },
    ]

    const { class: class_ = "" } = $props();
</script>


<nav class="bg-indigo-dye rounded-xl p-2 text-sm flex flex-col gap-12 {class_}">
    <img src={logo} alt="Logo" class="max-w-16" />
    <ul class="nav-links flex flex-col justify-center items-center gap-4 text-white">
        {#each links as link}
            <li class="font-bold hover:bg-indigo-dye-2 px-1 rounded-lg transition">
                <a href={link.href} class="flex flex-col justify-center items-center">
                    <img src={link.icon} alt="Weather Icon" class="w-4/6" />
                    <span>{link.name}</span>
                </a>
            </li>
        {/each}
    </ul>
</nav>
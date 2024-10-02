<template>
    <form action="#">
        <div class="flex items-center justify-center mb-8">
            <img class="w-16 h-16 rounded-full"
                src="https://plus.unsplash.com/premium_photo-1672280727393-ab6f0b26f527?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Rounded avatar">
        </div>
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                    Name</label>
                <input type="text" name="full_name" id="full-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="James Kamau" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="text" name="phone" id="phone"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="0712345678" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="region" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                <input type="text" name="region" id="region"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nairobi" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="altar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Altar</label>
                <input type="text" name="altar" id="altar"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Utawala Main" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="worship_pastor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Worship
                    Pastor</label>
                <input type="text" name="worship_pastor" id="worship_pastor"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Overseer Berryl" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="ovr_contact"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                <input type="text" name="ovr_contact" id="ovr_contact"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="07123445567" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="dab" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DAB</label>
                <input type="text" name="dab" id="dab"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Moses Tangara" required>
            </div>
            <div class="col-span-6 sm:col-span-3 mb-4">
                <label for="dab_contact"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                <input type="text" name="dab_contact" id="dab_contact"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="0724321111" required>
            </div>
        </div>
    </form>
</template>

<script setup>
</script>

<style></style>
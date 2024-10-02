<template>
    <form action="#">
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
        <div class="items-center pt-6 border-t border-gray-200 rounded-b dark:border-gray-700">
            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit">Update user</button>
        </div>
    </form>
</template>

<script setup>
</script>

<style></style>
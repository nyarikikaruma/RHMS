<template>
    <form action="#">
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
                <label for="meeting_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting
                    Name</label>
                <input type="text" name="meeting_name" id="meeting-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Menengai 6" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="start_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Starting
                    Date</label>
                <input type="date" name="start_date" id="start_date"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nairobi" required>
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="altar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending
                    Date</label>
                <input type="date" name="altar" id="altar"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Utawala Main" required>
            </div>
        </div>
        <div class="items-center pt-6 border-t border-gray-200 rounded-b dark:border-gray-700">
            <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit">Update Meeting</button>
        </div>
    </form>
</template>

<script setup>
</script>

<style></style>
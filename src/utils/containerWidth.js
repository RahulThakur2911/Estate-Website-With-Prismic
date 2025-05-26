/**
 * Returns the appropriate max-width class based on the container size
 * @param {string} size - The size of the container ('sm', 'md', 'lg', or any other value)
 * @returns {string} The corresponding max-width Tailwind class
 */
export const getContainerWidthClass = (size) => {
    switch (size) {
        case "sm":
            return "max-w-[500px]";
        case "md":
            return "max-w-[1000px]";
        case "lg":
            return "max-w-[1240px]";
        default:
            return "max-w-[1440px]";
    }
}; 
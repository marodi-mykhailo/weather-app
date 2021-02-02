export const getDayOfWeek = (miliseconds: number, main: boolean = false) => {
    if (main) {
        let currentDay = new Date().toLocaleString("default", {weekday: "long"})
        let day = new Date(miliseconds * 1000).toLocaleString("default", {weekday: "long"})
        if (currentDay === day) {
            return "Today"
        } else {
            return day
        }
    } else {
        return new Date(miliseconds * 1000).toLocaleString("default", {weekday: "long"})
    }
}

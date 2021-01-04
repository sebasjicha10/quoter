// Year Difference
export const getYearDifference = (year) => new Date().getFullYear() - year

// Total to pay according to the brand
export const calculateBrand = (brand) => {
    let increment

    switch(brand) {
        case "european":
            increment = 1.3
            break
        case "american":
            increment = 1.15
            break
        case "asian":
            increment = 1.05
            break
        default:
            break
    }
    return increment
}

// Calculate type of insurance
export const getPlan = (plan) => (plan === "basic") ? 1.20 : 1.50

// First letter Caps
export const firstLetterCap = (text) => text.charAt(0).toUpperCase() + text.slice(1)
# upload your files
assaults = read.csv("data/assaults.csv")
population = read.csv("data/population.csv")

# perform a vlookup using 'merge'

merged = merge(assaults[, c("Prison", "Assualts last year")], 
               population[, c("Prison", "Population")])

# make a new blank column

merged["rate"] = NA

# normalise by dividing your columns together

merged["rate"] = merged["Assualts last year"]/merged["Population"]

# exclude the columns you don't need

final = subset(merged, select = c(Prison, rate))

# put it into a spreadsheet

write.csv(final, file = "graph.csv")

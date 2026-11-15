import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Linus", "Grace"], "age": [36, 55, 85], "country": ["UK", "FI", "US"]})

print(df)
print(df[df["age"] > 40])
print(df["age"].describe())
print(df.groupby("country")["age"].mean())

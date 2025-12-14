def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * a  # BUG: Should be a * b

def divide(a, b):
    return a / b  # BUG: No zero division check

if __name__ == "__main__":
    print("10 * 5 =", multiply(10, 5))
    print("10 / 0 =", divide(10, 0))
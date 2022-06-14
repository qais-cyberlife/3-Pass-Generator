	static int min = 33;
	static int max = 122;
	
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Enter password length");
		int userInput = input.nextInt();
		
		for (int i = 0; i < userInput; i++) {
			int randomInt = (int)Math.floor(Math.random()*(max-min+1)+min);
			
			if (33 <= randomInt && randomInt <= 47) {
				char randomSymbol = (char) randomInt;
				System.out.print(randomSymbol);
			} else if (48 <= randomInt && randomInt <= 57) {
				char randomNumber = (char) randomInt;
				System.out.print(randomNumber);
			} else if (58 <= randomInt && randomInt <= 64) {
				char randomSymbol = (char) randomInt;
				System.out.print(randomSymbol);
			} else if (65 <= randomInt && randomInt <= 90) {
				char randomUppercaseLetter = (char) randomInt;
				System.out.print(randomUppercaseLetter);
			} else if (91 <= randomInt && randomInt <= 96) {
				char randomSymbol = (char) randomInt;
				System.out.print(randomSymbol);
			} else if (97 <= randomInt && randomInt <= 122) {
				char randomLowercaseLetter = (char) randomInt;
				System.out.print(randomLowercaseLetter);
			} else if (123 <= randomInt && randomInt <= 126) {
				char randomSymbol = (char) randomInt;
				System.out.print(randomSymbol);
			}
		}
//		System.out.println(randomInt);
	}
}	
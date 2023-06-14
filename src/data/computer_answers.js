const computerAnswers = {
    "Is it a male character?": {
        yes: ["Bad Bunny", "Bruno Mars", "Drake", "Ed Sheeran", "Joe Jonas",
            "Justin Bieber", "Justin Timberlake", "Machine Gun Kelly", "Nick Jonas",
            "Shawn Mendes", "The Weeknd", "Zayn"],
        no: ["Adele", "Ariana Grande", "Beyonce", "Britney Spears", "Demi Lovato",
            "Doja Cat", "Dua Lipa", "Katy Perry", "Lady Gaga", "Miley Cyrus", "Rihanna", "Taylor Swift"]
    },
    "Is it a female character?": {
        yes: ["Adele", "Ariana Grande", "Beyonce", "Britney Spears", "Demi Lovato",
            "Doja Cat", "Dua Lipa", "Katy Perry", "Lady Gaga", "Miley Cyrus", "Rihanna", "Taylor Swift"],
        no: ["Bad Bunny", "Bruno Mars", "Drake", "Ed Sheeran", "Joe Jonas",
            "Justin Bieber", "Justin Timberlake", "Machine Gun Kelly", "Nick Jonas",
            "Shawn Mendes", "The Weeknd", "Zayn"]
    },
    "Is the character American?": {
        yes: ["Bruno Mars", "Joe Jonas", "Justin Timberlake", "Machine Gun Kelly", "Nick Jonas",
            "Ariana Grande", "Beyonce", "Britney Spears", "Demi Lovato", "Doja Cat","Katy Perry",
            "Lady Gaga", "Miley Cyrus", "Taylor Swift"],
        no: ["Bad Bunny", "Drake", "Ed Sheeran", "Justin Bieber", "Shawn Mendes", "The Weeknd", "Zayn", "Adele",
            "Dua Lipa", "Rihanna"]
    },
    "Is the character married?": {
        yes: ["Joe Jonas", "Justin Timberlake", "Nick Jonas", "Ariana Grande", "Beyonce", "Ed Sheeran", "Justin Bieber",
            "Britney Spears"],
        no: ["Bruno Mars", "Demi Lovato", "Doja Cat", "Machine Gun Kelly", "Bad Bunny", "Drake", "Shawn Mendes",
            "The Weeknd", "Zayn", "Adele", "Dua Lipa", "Rihanna", "Katy Perry", "Lady Gaga", "Miley Cyrus",
            "Taylor Swift"]
    },
    "Does the character have children?": {
        yes: ["Joe Jonas", "Justin Timberlake", "Machine Gun Kelly", "Nick Jonas",
             "Beyonce", "Britney Spears", "Katy Perry", "Drake", "Ed Sheeran", "Zayn", "Adele", "Rihanna"],
        no: ["Ariana Grande", "Lady Gaga", "Miley Cyrus", "Taylor Swift", "Bruno Mars", "Demi Lovato", "Doja Cat",
            "Bad Bunny", "Justin Bieber", "Shawn Mendes", "The Weeknd", "Dua Lipa"]
    },
    "Has the character ever been part of a band/group?": {
        yes: ["Joe Jonas", "Justin Timberlake", "Nick Jonas", "Beyonce", "Zayn"],
        no: ["Machine Gun Kelly", "Britney Spears", "Katy Perry", "Drake", "Ed Sheeran", "Adele", "Rihanna",
            "Ariana Grande", "Lady Gaga", "Miley Cyrus", "Taylor Swift", "Bruno Mars", "Demi Lovato", "Doja Cat",
            "Bad Bunny", "Justin Bieber", "Shawn Mendes", "The Weeknd", "Dua Lipa"]
    },
    "Were they ever a Disney star?": {
        yes: ["Justin Timberlake", "Britney Spears", "Joe Jonas", "Nick Jonas", "Miley Cyrus", "Demi Lovato"],
        no: ["Beyonce", "Zayn", "Machine Gun Kelly", "Katy Perry", "Drake", "Ed Sheeran", "Adele", "Rihanna",
            "Ariana Grande", "Lady Gaga", "Taylor Swift", "Bruno Mars", "Doja Cat", "Bad Bunny", "Justin Bieber",
            "Shawn Mendes", "The Weeknd", "Dua Lipa"]
    },
    "Have they ever won a Grammy award?": {
        yes: ["Justin Timberlake", "Britney Spears", "Beyonce", "Drake", "Ed Sheeran", "Adele", "Rihanna",
            "Ariana Grande", "Lady Gaga", "Taylor Swift", "Bruno Mars", "Doja Cat", "Bad Bunny", "Justin Bieber",
            "The Weeknd", "Dua Lipa"],
        no: ["Joe Jonas", "Nick Jonas", "Miley Cyrus", "Demi Lovato", "Zayn", "Machine Gun Kelly", "Katy Perry",
            "Demi Lovato", "Shawn Mendes"]
    },
    "Do they have an NZ #1 single?": {
        yes: ["Adele", "Ariana Grande", "Beyonce", "Britney Spears", "Bruno Mars", "Doja Cat", "Drake", "Dua Lipa",
            "Ed Sheeran", "Joe Jonas", "Justin Bieber", "Justin Timberlake", "Katy Perry", "Lady Gaga", "Miley Cyrus",
            "Nick Jonas", "Rihanna", "Shawn Mendes", "Taylor Swift", "The Weeknd", "Zayn"],
        no: ["Bad Bunny", "Demi Lovato", "Machine Gun Kelly"]
    }
};

export default computerAnswers;

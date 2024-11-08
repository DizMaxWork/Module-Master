export interface WordsLibrary {
  nav: string[];
  navSelectLanguages: string;
  mainBlock: {
    title: string;
    content: string[];
    btn: string;
  };
  plusesBlock: [
    {
      title: string;
      text: string;
    },
    {
      title: string;
      text: string;
    },
    {
      title: string;
      text: string;
    },
    {
      title: string;
      text: string;
    }
  ];
  moduleOptions: {
    title: string;
    cards: [
      {
        img: string;
        title: string;
      }
    ];
  };
  configurations: {
    title: string;
    cards: [
      {
        img: string;
        title: string;
        formImg: string;
      }
    ];
  };
  inside: {
    title: string;
    text: string[];
  };
  ourWorks: {
    title: string;
    imgs: string[];
  };
  footer: {
    nav: {
      title: string;
      links: string[];
    };
    rightBlock: { footerTitle: string; inputPlaceholder: string };
    contactsTitle: string;
    smallText: {
      privatePolicyTitle: string;
      paymentDetails: string;
    };
  };
}

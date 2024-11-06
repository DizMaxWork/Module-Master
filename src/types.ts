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
  moduleOptions: [
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    },
    {
      img: string;
      title: string;
    }
  ];
  configurations: [
    {
      img: string;
      title: string;
      formImg: string;
    },
    {
      img: string;
      title: string;
      formImg: string;
    },
    {
      img: string;
      title: string;
      formImg: string;
    },
    {
      img: string;
      title: string;
      formImg: string;
    },
    {
      img: string;
      title: string;
      formImg: string;
    },
    {
      img: string;
      title: string;
      formImg: string;
    }
  ];
  inside: {
    title: string;
    text: string[];
  };
  ourWorks: {
    title: string;
    imgs: string[];
  };
  footer: {
    nav: string[];
    contactsTitle: string;
    privatePolicyTitle: string;
    footerTitle: string;
    inputPlaceholder: string;
    paymentDetails: string;
  };
}

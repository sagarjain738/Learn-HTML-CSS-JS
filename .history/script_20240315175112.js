// Variables

// Truthy & Falsy Value
{
  // 0, NULL, Undefined, "", False
  //   if (!null) {
  //     console.log("Falsy value");
  //   } else {
  //     console.log("Truthy Value");
  //   }
}

{
  // console.log(testingLet);
  // var testingVar = " Sgaar";
  // let testingLet = "Sagar";
  // const testingConst = "Sagar";
  // testFunction();
  // let testFunction = () => {
  //   console.log("test");
  // };
}
// Function

{
  // functionDeclaration();
  //   arrowFunction();

  function functionDeclaration() {
    console.log("Function Declaration");
  }

  // functionDeclaration();

  var functionExpression = function () {
    console.log("Function Expression");
  };

  // functionExpression();

  var arrowFunction = () => {
    console.log("Arrow Function");
  };

  // arrowFunction();
}

// Array
{
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // For Each Loop
  {
    // testArray.forEach(callback);
    // function callback(d) {
    //   return (d = d * 2);
    // }
  }

  // For Of Loop
  {
    //   for (let a of testArray) {
    //     console.log(a);
    //   }
  }

  // For In Loop
  {
    //   for (let a in testArray) {
    //     console.log(testArray[a]);
    //   }
  }

  //  Learn Map Method

  {
    // const result = [];
    // for (let i = 0; i < testArray.length - 2; i++) {
    //   result.push(testArray[i] * 1000);
    // }
    // testArray = testArray.map((element) => element * 3);
    // console.log("New Array", testArray);
    // const n = "test"
    // n.toUpperCase()
    // const names = ["Alice", "Bob", "Charlie", "John", "Deo"];
  }

  // Learn Filter Method

  {
    // const newArr = testArray.filter((element) => element % 2 == 0);
    // console.log("Filter", newArr);
  }

  // Learn Reduce Method

  {
    const sum = testArray.reduce(
      (previousValue, currentValue, index) =>
        index > 5 ? currentValue + previousValue : previousValue,
      1000
    );

    // console.log("Reduce", sum);
  }

  // Array Sort
  {
    // const sortingArray = [1, 2, 3, 4, 5, 55, 111, 22, 77, 9];
    // const result = sortingArray.sort((a, b) => {
    //   if (b < a) return -1;
    //   else if (b > a) return 1;
    //   else return 0;
    // });
    // console.log("Sorted", result);
  }
}

// Object
{
  // Basic

  {
    function getInfo(message) {
      console.log(message + this.name);
    }

    const name = "Sagar";
    const user = {
      name: "Sagar",
      age: "100",
      city: "Pune",
      hobbies: ["Reading", "Writing"],
      personalInfo: {
        homeTown: "Dhule",
        district: "Dhule",
      },
      123: "Number",
      isSingle: true,
      getInfo,
    };

    // console.log("Object Example :=>", user.hobbies[0]);
    // const aa = JSON.stringify(user);
    // console.log(aa);
    // console.log(user.getInfo("Hello, How are you? "));
  }

  // JSON Conversion

  {
    const testing = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990",
          },
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services",
        },
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263",
          geo: {
            lat: "-31.8129",
            lng: "62.5342",
          },
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems",
        },
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
          street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: "23505-1337",
          geo: {
            lat: "-71.4197",
            lng: "71.7478",
          },
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
          name: "Considine-Lockman",
          catchPhrase: "Synchronised bottom-line interface",
          bs: "e-enable innovative applications",
        },
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
          street: "Rex Trail",
          suite: "Suite 280",
          city: "Howemouth",
          zipcode: "58804-1099",
          geo: {
            lat: "24.8918",
            lng: "21.8984",
          },
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
          name: "Johns Group",
          catchPhrase: "Configurable multimedia task-force",
          bs: "generate enterprise e-tailers",
        },
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
          street: "Ellsworth Summit",
          suite: "Suite 729",
          city: "Aliyaview",
          zipcode: "45169",
          geo: {
            lat: "-14.3990",
            lng: "-120.7677",
          },
        },
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        company: {
          name: "Abernathy Group",
          catchPhrase: "Implemented secondary concept",
          bs: "e-enable extensible e-tailers",
        },
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
          street: "Dayna Park",
          suite: "Suite 449",
          city: "Bartholomebury",
          zipcode: "76495-3109",
          geo: {
            lat: "24.6463",
            lng: "-168.8889",
          },
        },
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        company: {
          name: "Yost and Sons",
          catchPhrase: "Switchable contextually-based project",
          bs: "aggregate real-time technologies",
        },
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      },
    ];

    // Converting Normal object to JSON
    // const converted = JSON.stringify(testing);
    //
    //
    // COnverting JSON to Normal Object
    // const reverseConverted = JSON.parse(converted);
    // console.log(reverseConverted);
  }

  // Loops In Object

  // For In Loop
  {
    const user = {
      name: "Sagar",
      age: "100",
      city: "Pune",
      hobbies: ["Reading", "Writing"],
      personalInfo: {
        homeTown: "Dhule",
        district: "Dhule",
      },
      123: "Number",
      isSingle: true,
      getInfo,
    };

    // for (let a in user) {
    //   console.log(user[a]);
    // }
  }
}

// Practice
{
  const users = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
      userId: 2,
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
      userId: 2,
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      userId: 2,
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
      userId: 2,
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
      userId: 2,
      id: 16,
      title:
        "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    },
    {
      userId: 2,
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
      userId: 2,
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    },
    {
      userId: 2,
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    },
    {
      userId: 2,
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    },
    {
      userId: 3,
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    },
    {
      userId: 3,
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    },
    {
      userId: 3,
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
    },
    {
      userId: 3,
      id: 24,
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
    },
    {
      userId: 3,
      id: 25,
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
    },
    {
      userId: 3,
      id: 26,
      title: "est et quae odit qui non",
      body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
    },
    {
      userId: 3,
      id: 27,
      title: "quasi id et eos tenetur aut quo autem",
      body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
    },
    {
      userId: 3,
      id: 28,
      title: "delectus ullam et corporis nulla voluptas sequi",
      body: "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
    },
    {
      userId: 3,
      id: 29,
      title: "iusto eius quod necessitatibus culpa ea",
      body: "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
    },
    {
      userId: 3,
      id: 30,
      title: "a quo magni similique perferendis",
      body: "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
    },
    {
      userId: 4,
      id: 31,
      title: "ullam ut quidem id aut vel consequuntur",
      body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
    },
    {
      userId: 4,
      id: 32,
      title: "doloremque illum aliquid sunt",
      body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
    },
    {
      userId: 4,
      id: 33,
      title: "qui explicabo molestiae dolorem",
      body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
    },
    {
      userId: 4,
      id: 34,
      title: "magnam ut rerum iure",
      body: "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
    },
    {
      userId: 4,
      id: 35,
      title: "id nihil consequatur molestias animi provident",
      body: "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit",
    },
    {
      userId: 4,
      id: 36,
      title: "fuga nam accusamus voluptas reiciendis itaque",
      body: "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
    },
    {
      userId: 4,
      id: 37,
      title: "provident vel ut sit ratione est",
      body: "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui",
    },
    {
      userId: 4,
      id: 38,
      title: "explicabo et eos deleniti nostrum ab id repellendus",
      body: "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure",
    },
    {
      userId: 4,
      id: 39,
      title: "eos dolorem iste accusantium est eaque quam",
      body: "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
    },
    {
      userId: 4,
      id: 40,
      title: "enim quo cumque",
      body: "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
    },
    {
      userId: 5,
      id: 41,
      title: "non est facere",
      body: "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe",
    },
    {
      userId: 5,
      id: 42,
      title:
        "commodi ullam sint et excepturi error explicabo praesentium voluptas",
      body: "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut",
    },
    {
      userId: 5,
      id: 43,
      title:
        "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
      body: "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
    },
    {
      userId: 5,
      id: 44,
      title: "optio dolor molestias sit",
      body: "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae",
    },
    {
      userId: 5,
      id: 45,
      title: "ut numquam possimus omnis eius suscipit laudantium iure",
      body: "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem",
    },
    {
      userId: 5,
      id: 46,
      title: "aut quo modi neque nostrum ducimus",
      body: "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid",
    },
    {
      userId: 5,
      id: 47,
      title: "quibusdam cumque rem aut deserunt",
      body: "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate",
    },
    {
      userId: 5,
      id: 48,
      title: "ut voluptatem illum ea doloribus itaque eos",
      body: "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit",
    },
    {
      userId: 5,
      id: 49,
      title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
      body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    },
    {
      userId: 5,
      id: 50,
      title:
        "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
    },
  ];

  // {
  //   userId: 1,
  //   id: 1,
  //   title:
  //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  // },

  // Original
  {
    const result = users
      .filter((item) => item.id > 25)
      .map((item) => ({
        myId: item.id,
        myTitle: item.title,
      }));
  }

  // Advanced
  {
    const result = users
      .filter(({ id }) => id > 25)
      .map(({ id, title }) => ({
        id,
        title,
      }));
  }

  const result = users
    .filter(({ id }) => id > 25)
    .map(({ id, title }) => ({
      id,
      title,
    }));

  //   // .sort((itemA, itemB) => itemB.myId - itemA.myId)
  //   .slice(4);

  // // const result2 = result.splice(1);

  // console.log("Greater Result", result);
}

// Destructuring Object

{
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  // const uName = user.name;
  // const userName = user.username;
  // const email = user.email;
  // const phone = user.phone;
  const {
    name: names,
    address: { street },
  } = user;
  // console.log(street);
}

// Destruturing Array

{
  const user = [
    "Sagar",
    "Prashant",
    "Deepak",
    "Rucha",
    "Ravina",
    "Rajesh",
    "Santosh",
  ];

  // const sagar = user[0];
  // const Rucha = user[3];

  const [, Prashant, , , Ravina] = user;

  // console.log(Ravina);
}

// SET

{
  // const arr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5];
  // const ss = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);
  // console.log("Set", ss);
  // ss.add(5);
  // console.log("Set", ss);
}

// Map

{
  const testMap = new Map([
    ["a", { name: "Sagar" }],
    [1, "hello"],
  ]);

  // console.log("Test Map", testMap);
  // const testedData = testMap.forEach((a, b) => console.log(b, a));
  // console.log("testedData", testedData);
}

// Primitive Vs  Reference Type
{
  // let first = 100;
  // let second = first;
  // first = 68726134;
  // second = first;
  // let firstArray = [1, 2, 3, 4, 5];
  // let secondArray = firstArray; //["Hello", "Hola"];
  // firstArray.push(99999);
  // console.log("Testing primitive Type : =>  ", secondArray);
  // create function for caching
}

// Clonning Array

{
  // Traditional Way
  {
    const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const secondArray = firstArray.slice(0);
    firstArray.push(11);
    firstArray.push(11);
    firstArray.push(11);
    firstArray.push(11);
    // console.log("firstArray", firstArray);
    // console.log("secondArray", secondArray);
  }

  // Spread Operator
  {
    const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}

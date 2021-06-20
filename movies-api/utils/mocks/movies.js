const moviesMock = [
    {
      "id": "1bc33ea9-79f2-4c07-88d6-94d0223bf89e",
      "title": "Letter to Three Wives, A",
      "year": 2009,
      "cover": "http://dummyimage.com/235x133.bmp/5fa2dd/ffffff",
      "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "duration": 2025,
      "contentRating": "PG-13",
      "soruce": "http://state.gov/donec/quis/orci/eget/orci.xml?primis=donec&in=diam&faucibus=neque&orci=vestibulum&luctus=eget&et=vulputate&ultrices=ut&posuere=ultrices&cubilia=vel&curae=augue&donec=vestibulum&pharetra=ante&magna=ipsum&vestibulum=primis&aliquet=in&ultrices=faucibus&erat=orci&tortor=luctus&sollicitudin=et&mi=ultrices&sit=posuere&amet=cubilia&lobortis=curae&sapien=donec&sapien=pharetra&non=magna&mi=vestibulum&integer=aliquet&ac=ultrices&neque=erat&duis=tortor&bibendum=sollicitudin&morbi=mi&non=sit&quam=amet&nec=lobortis&dui=sapien&luctus=sapien&rutrum=non&nulla=mi&tellus=integer&in=ac&sagittis=neque&dui=duis&vel=bibendum&nisl=morbi&duis=non&ac=quam&nibh=nec&fusce=dui&lacus=luctus&purus=rutrum&aliquet=nulla&at=tellus&feugiat=in&non=sagittis&pretium=dui&quis=vel&lectus=nisl&suspendisse=duis&potenti=ac&in=nibh&eleifend=fusce&quam=lacus&a=purus&odio=aliquet&in=at&hac=feugiat&habitasse=non&platea=pretium&dictumst=quis&maecenas=lectus&ut=suspendisse&massa=potenti&quis=in&augue=eleifend&luctus=quam&tincidunt=a&nulla=odio&mollis=in&molestie=hac&lorem=habitasse&quisque=platea&ut=dictumst&erat=maecenas&curabitur=ut&gravida=massa&nisi=quis&at=augue&nibh=luctus&in=tincidunt&hac=nulla&habitasse=mollis&platea=molestie&dictumst=lorem&aliquam=quisque&augue=ut&quam=erat",
      "tags": [
        "Action|Crime|Drama|Thriller",
        "Horror",
        "Crime|Drama|Mystery",
        "Horror"
      ]
    },
    {
      "id": "b8ab170d-85d6-43d5-a243-ab634bc64a29",
      "title": "Steel",
      "year": 1992,
      "cover": "http://dummyimage.com/161x158.jpg/dddddd/000000",
      "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "duration": 2056,
      "contentRating": "PG",
      "soruce": "https://zdnet.com/ac.html?elementum=phasellus&pellentesque=in&quisque=felis&porta=donec&volutpat=semper&erat=sapien&quisque=a&erat=libero&eros=nam&viverra=dui&eget=proin&congue=leo&eget=odio&semper=porttitor&rutrum=id&nulla=consequat&nunc=in&purus=consequat&phasellus=ut&in=nulla&felis=sed&donec=accumsan&semper=felis&sapien=ut&a=at&libero=dolor&nam=quis&dui=odio&proin=consequat&leo=varius&odio=integer&porttitor=ac&id=leo&consequat=pellentesque&in=ultrices&consequat=mattis&ut=odio&nulla=donec&sed=vitae&accumsan=nisi&felis=nam&ut=ultrices&at=libero&dolor=non&quis=mattis&odio=pulvinar&consequat=nulla&varius=pede&integer=ullamcorper&ac=augue&leo=a&pellentesque=suscipit&ultrices=nulla&mattis=elit&odio=ac&donec=nulla&vitae=sed&nisi=vel&nam=enim&ultrices=sit&libero=amet&non=nunc&mattis=viverra&pulvinar=dapibus&nulla=nulla&pede=suscipit&ullamcorper=ligula&augue=in&a=lacus&suscipit=curabitur&nulla=at&elit=ipsum&ac=ac&nulla=tellus&sed=semper&vel=interdum&enim=mauris&sit=ullamcorper&amet=purus&nunc=sit&viverra=amet&dapibus=nulla&nulla=quisque&suscipit=arcu",
      "tags": ["Comedy", "Comedy"]
    },
    {
      "id": "15856f05-ad01-4baa-8f21-3ae9a9766cc6",
      "title": "Iron Will",
      "year": 2012,
      "cover": "http://dummyimage.com/112x216.bmp/5fa2dd/ffffff",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "duration": 1952,
      "contentRating": "NC-17",
      "soruce": "http://netlog.com/quis/turpis/sed.jpg?in=suscipit&est=nulla&risus=elit&auctor=ac&sed=nulla&tristique=sed&in=vel&tempus=enim&sit=sit&amet=amet&sem=nunc&fusce=viverra&consequat=dapibus&nulla=nulla&nisl=suscipit&nunc=ligula&nisl=in&duis=lacus&bibendum=curabitur&felis=at&sed=ipsum&interdum=ac",
      "tags": [
        "Documentary",
        "Drama|Horror",
        "Documentary|Musical",
        "Comedy",
        "Comedy|Drama"
      ]
    },
    {
      "id": "102ec098-701c-4b64-be3a-73a251c420f0",
      "title": "Ursul",
      "year": 2007,
      "cover": "http://dummyimage.com/103x234.bmp/ff4444/ffffff",
      "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "duration": 1900,
      "contentRating": "G",
      "soruce": "https://yahoo.com/maecenas/leo.aspx?in=commodo&sagittis=placerat&dui=praesent&vel=blandit&nisl=nam&duis=nulla&ac=integer&nibh=pede&fusce=justo&lacus=lacinia&purus=eget&aliquet=tincidunt&at=eget&feugiat=tempus&non=vel&pretium=pede&quis=morbi&lectus=porttitor&suspendisse=lorem&potenti=id&in=ligula&eleifend=suspendisse&quam=ornare&a=consequat&odio=lectus&in=in&hac=est&habitasse=risus&platea=auctor&dictumst=sed&maecenas=tristique&ut=in&massa=tempus&quis=sit&augue=amet&luctus=sem&tincidunt=fusce&nulla=consequat&mollis=nulla&molestie=nisl&lorem=nunc&quisque=nisl&ut=duis&erat=bibendum&curabitur=felis&gravida=sed&nisi=interdum&at=venenatis&nibh=turpis&in=enim&hac=blandit&habitasse=mi&platea=in&dictumst=porttitor&aliquam=pede&augue=justo&quam=eu&sollicitudin=massa&vitae=donec&consectetuer=dapibus&eget=duis&rutrum=at&at=velit&lorem=eu&integer=est&tincidunt=congue&ante=elementum&vel=in&ipsum=hac&praesent=habitasse&blandit=platea&lacinia=dictumst&erat=morbi&vestibulum=vestibulum&sed=velit",
      "tags": [
        "Action|Adventure|Fantasy|Romance|IMAX",
        "Romance",
        "Crime|Drama|Romance",
        "Documentary|IMAX"
      ]
    },
    {
      "id": "fe0b5c29-dc0b-4c5e-98ea-5d2cb75a34cd",
      "title": "Man from Monterey, The",
      "year": 2005,
      "cover": "http://dummyimage.com/246x250.png/cc0000/ffffff",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      "duration": 1970,
      "contentRating": "PG-13",
      "soruce": "https://domainmarket.com/in/sapien/iaculis/congue/vivamus.jpg?at=consequat&turpis=in&donec=consequat&posuere=ut&metus=nulla&vitae=sed&ipsum=accumsan&aliquam=felis&non=ut&mauris=at&morbi=dolor&non=quis&lectus=odio&aliquam=consequat&sit=varius&amet=integer&diam=ac&in=leo&magna=pellentesque&bibendum=ultrices&imperdiet=mattis&nullam=odio&orci=donec&pede=vitae&venenatis=nisi",
      "tags": ["Comedy|Crime", "Drama", "Drama|War", "Action|Thriller"]
    },
    {
      "id": "7d393e72-2ba3-4e9c-82ac-4218fa31cee6",
      "title": "Untraceable",
      "year": 1997,
      "cover": "http://dummyimage.com/124x115.jpg/5fa2dd/ffffff",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "duration": 2001,
      "contentRating": "PG-13",
      "soruce": "http://skype.com/turpis/eget/elit.xml?habitasse=lacinia&platea=eget&dictumst=tincidunt&morbi=eget&vestibulum=tempus&velit=vel&id=pede&pretium=morbi&iaculis=porttitor&diam=lorem&erat=id&fermentum=ligula&justo=suspendisse&nec=ornare&condimentum=consequat&neque=lectus&sapien=in&placerat=est&ante=risus&nulla=auctor&justo=sed&aliquam=tristique&quis=in&turpis=tempus&eget=sit&elit=amet&sodales=sem&scelerisque=fusce&mauris=consequat&sit=nulla&amet=nisl&eros=nunc&suspendisse=nisl&accumsan=duis&tortor=bibendum&quis=felis&turpis=sed&sed=interdum&ante=venenatis&vivamus=turpis&tortor=enim&duis=blandit&mattis=mi&egestas=in&metus=porttitor&aenean=pede&fermentum=justo&donec=eu&ut=massa&mauris=donec&eget=dapibus&massa=duis&tempor=at&convallis=velit&nulla=eu&neque=est&libero=congue&convallis=elementum&eget=in&eleifend=hac&luctus=habitasse&ultricies=platea&eu=dictumst&nibh=morbi&quisque=vestibulum&id=velit&justo=id&sit=pretium&amet=iaculis&sapien=diam&dignissim=erat&vestibulum=fermentum&vestibulum=justo&ante=nec&ipsum=condimentum&primis=neque&in=sapien&faucibus=placerat&orci=ante&luctus=nulla&et=justo&ultrices=aliquam&posuere=quis&cubilia=turpis&curae=eget&nulla=elit&dapibus=sodales&dolor=scelerisque",
      "tags": [
        "Comedy|Drama",
        "Adventure|Fantasy|Romance",
        "Action|Adventure|Sci-Fi|War|IMAX"
      ]
    },
    {
      "id": "c26ba6de-32d1-4aa3-8352-b8a7d7eaa030",
      "title": "Alphaville (Alphaville, une étrange aventure de Lemmy Caution)",
      "year": 2007,
      "cover": "http://dummyimage.com/198x142.png/ff4444/ffffff",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      "duration": 2060,
      "contentRating": "G",
      "soruce": "http://163.com/vestibulum/aliquet/ultrices/erat/tortor/sollicitudin/mi.xml?malesuada=in&in=hac&imperdiet=habitasse&et=platea&commodo=dictumst&vulputate=aliquam&justo=augue&in=quam&blandit=sollicitudin&ultrices=vitae&enim=consectetuer&lorem=eget&ipsum=rutrum&dolor=at&sit=lorem&amet=integer&consectetuer=tincidunt&adipiscing=ante&elit=vel&proin=ipsum&interdum=praesent&mauris=blandit&non=lacinia&ligula=erat&pellentesque=vestibulum&ultrices=sed&phasellus=magna&id=at&sapien=nunc&in=commodo&sapien=placerat&iaculis=praesent&congue=blandit&vivamus=nam&metus=nulla&arcu=integer&adipiscing=pede&molestie=justo&hendrerit=lacinia&at=eget&vulputate=tincidunt",
      "tags": ["Drama", "Drama", "Comedy|Romance"]
    },
    {
      "id": "12d2ce21-f37c-45c0-8942-ef9b73869ac8",
      "title": "Soldier's Sweetheart, A",
      "year": 1992,
      "cover": "http://dummyimage.com/135x220.jpg/5fa2dd/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      "duration": 2066,
      "contentRating": "NC-17",
      "soruce": "http://spiegel.de/imperdiet/et/commodo/vulputate/justo/in.jsp?nulla=tempor&dapibus=convallis&dolor=nulla&vel=neque&est=libero&donec=convallis&odio=eget&justo=eleifend&sollicitudin=luctus&ut=ultricies&suscipit=eu&a=nibh&feugiat=quisque&et=id&eros=justo&vestibulum=sit&ac=amet&est=sapien&lacinia=dignissim&nisi=vestibulum&venenatis=vestibulum",
      "tags": ["Comedy|Horror|Thriller"]
    },
    {
      "id": "61c9487a-aae3-47cd-8cf3-fc1f233f1a0b",
      "title": "House",
      "year": 2011,
      "cover": "http://dummyimage.com/248x128.jpg/ff4444/ffffff",
      "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "duration": 1962,
      "contentRating": "PG",
      "soruce": "https://blogs.com/lectus/suspendisse/potenti/in/eleifend/quam/a.jsp?nisi=in&volutpat=porttitor&eleifend=pede&donec=justo&ut=eu&dolor=massa&morbi=donec&vel=dapibus&lectus=duis&in=at&quam=velit&fringilla=eu",
      "tags": ["Drama", "Documentary", "Comedy|Horror"]
    },
    {
      "id": "4dc978ae-a82e-4985-8139-5f9dff857a2f",
      "title": "Larks on a String (Skrivánci na niti)",
      "year": 1973,
      "cover": "http://dummyimage.com/222x200.png/ff4444/ffffff",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "duration": 1910,
      "contentRating": "PG-13",
      "soruce": "http://dmoz.org/sit/amet/sem/fusce/consequat/nulla/nisl.jpg?velit=eu&eu=magna&est=vulputate&congue=luctus&elementum=cum&in=sociis&hac=natoque&habitasse=penatibus&platea=et&dictumst=magnis&morbi=dis&vestibulum=parturient&velit=montes&id=nascetur&pretium=ridiculus&iaculis=mus&diam=vivamus&erat=vestibulum&fermentum=sagittis&justo=sapien&nec=cum&condimentum=sociis&neque=natoque&sapien=penatibus&placerat=et&ante=magnis&nulla=dis&justo=parturient&aliquam=montes&quis=nascetur&turpis=ridiculus&eget=mus&elit=etiam",
      "tags": ["Comedy|Romance", "Drama", "Drama|Romance", "Drama"]
    }
  ];

  function filteredMoviesMocks(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
  }

  class MoviesServiceMock {
    async getMovies() {
      return Promise.resolve(moviesMock);
    }

    async createMovie() {
      return Promise.resolve(moviesMock[0]);
    }
  }

module.exports = {
    moviesMock,
    filteredMoviesMocks,
    MoviesServiceMock
}
  

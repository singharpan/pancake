// What happen when type a URL into a browser
// URL : Universal Resource Locator

// http://example.com/products/electric/phone

// http : This is called Scheme , this tells the browser to connect with server with
//    http protocol
// example.com : This is called Domain
// products/electric : path  (directory) (defination not clear)
// phone : resource (file)

// 1: Browser need to know how to reach the server
//    This is done with the process called DNS (Domain Name System) Lookup
//    This is like the phone book of internet (translates the domain names into IP address)
//    First request for DNS local browser cache or OS cache if not found it request
//    for DND Resolver

// 2: Now Browser has the IP address of the server
// 3: Now Browser establishes the TCP connection with server with that IP address
// 4: Finally Browser sends the HTTP request to the server
// 5 : Server process the request and send back the response
// 6 : Then Browser receives the content and renders the HTTP content
//VARIABLES
var currentCountrySelected = null;
var countryConstraintGraph = [];
var countryConstraintCount = [];
var mapcolours = [ "R", "G", "B", "Y" ];
var stack = [];
var edges = 0; //TOTAL NUMBER OF STATES initially V
var color = [];
var dataSet = [];
var currentMap = -1;
var currentState;
var isAlgorithmSelected = false;
var isHeuristicsUsed = false;
var numberOfBacktrack = 0;


var india_constraint_graph =[
  [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],

]

var india_constraint_count = [
  {
    id: "IN.AR",
    state: "Arunachal",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //1
  {
    id: "IN.TN",
    state: "Tamil Nadu",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 4
  }, //29
  {
    id: "IN.NL",
    state: "Nagaland",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  }, // 2
  {
    id: "IN.MZ",
    state: "Mizoram",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  },//4

  {
    id: "IN.TR",
    state: "Tripura",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //6

  {
    id: "IN.ML",
    state: "Meghalaya",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 1
  }, //8
  {
    id: "IN.SK",
    state: "Sikkim",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 1
  }, //7
  {
    id: "IN.WB",
    state: "WestBengal",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //24
  {
    id: "IN.BR",
    state: "Bihar",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  }, //10 
  {
    id: "IN.JH",
    state: "Jharkhand",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //9
  {
    id: "IN.OR",
    state: "Odisha",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //23
  {
    id: "IN.UP",
    state: "UttarPradesh",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 8
  }, //13

  {
    id: "IN.PY",
    state: "Pondicherry",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 1
  }, //14
  {
    id: "IN.CT",
    state: "Chattisgarh",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 6
  }, //15
  {
    id: "IN.JK",
    state: "Jammu and Kashmir",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //16
  {
    id: "IN.HP",
    state: "Himachal Pradesh",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //17
  {
    id: "IN.UT",
    state: "Uttrakhand",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //18
  {
    id: "IN.PB",
    state: "Punjab",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //19
  {
    id: "IN.HR",
    state: "Haryana",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //20
  {
    id: "IN.DL",
    state: "Delhi",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //21
  {
    id: "IN.RJ",
    state: "Rajasthan",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 4
  }, //22
  {
    id: "IN.MP",
    state: "Madhya Pradesh",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  }, //12   
  {
    id: "IN.GJ",
    state: "Gujrat",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 4
  }, //34

  {
    id: "IN.MH",
    state: "Maharashtra",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 7
  }, //25
  {
    id: "IN.MNL",
    state: "Manipur",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  }, //25
  {
    id: "IN.AP",
    state: "Andhra Pradesh",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 4
  }, //27
  {
    id: "IN.KL",
    state: "Kerela",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //30
  {
    id: "IN.AS",
    state: "Assam",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 7
  }, //1
  {
    id: "IN.KA",
    state: "Karnataka",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 6
  }, //28
  {
    id: "IN.LA",
    state: "Lakshwadeep",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 0
  }, //31

  {
    id: "IN.DD",
    state: "Damandiu",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  }, //32

  {
    id: "IN.CH",
    state: "Chandigarh",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  }, //33
  {
    id: "IN.GA",
    state: "Goa",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  } //11 

];

var india_dataSet = [
  { id: "IN.AR", fill: null },
  { id: "IN.TN", fill: null },
  { id: "IN.NL", fill: null },
  { id: "IN.MZ", fill: null },
  { id: "IN.TR", fill: null },
  { id: "IN.ML", fill: null },
  { id: "IN.SK", fill: null },
  { id: "IN.HR", fill: null },
  { id: "IN.BR", fill: null },
  { id: "IN.JH", fill: null },
  { id: "IN.OR", fill: null },
  { id: "IN.KA", fill: null },
  { id: "IN.PY", fill: null }, 
  { id: "IN.JK", fill: null },
  { id: "IN.CT", fill: null },
  { id: "IN.HP", fill: null },
  { id: "IN.DL", fill: null },
  { id: "IN.PB", fill: null },
  { id: "IN.MH", fill: null },
  { id: "IN.UT", fill: null },
  { id: "IN.UP", fill: null },
  { id: "IN.MP", fill: null },
  { id: "IN.GJ", fill: null },
  { id: "IN.WB", fill: null },
  { id: "IN.MNL", fill: null },
  { id: "IN.AP", fill: null },
  { id: "IN.AS", fill: null },
  { id: "IN.KL", fill: null },
  { id: "IN.RJ", fill: null },
  { id: "IN.LA", fill: null },
  { id: "IN.DD", fill: null },
  { id: "IN.CH", fill: null },
  { id: "IN.GA", fill: null },
];


var india_color_domain = [ "R", "G", "B", "Y" ];

var australian_constraint_graph = [
  [ 0, 1, 1, 0, 0, 0, 0 ], //Western Australia
  [ 1, 0, 1, 1, 0, 0, 0 ], //Northern Territory
  [ 1, 1, 0, 1, 1, 1, 0 ], //South Australia
  [ 0, 1, 1, 0, 1, 0, 0 ], //Queensland
  [ 0, 0, 1, 1, 0, 1, 0 ], //New South Wales
  [ 0, 0, 1, 0, 1, 0, 0 ], //Victoria
  [ 0, 0, 0, 0, 0, 0, 0 ] //Tasmania
];


var australian_constraint_count = [
  {
    id: "AU.WA",
    state: "Western Australia",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  },
  {
    id: "AU.NT",
    state: "Northern Territory",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  },
  {
    id: "AU.SA",
    state: "South Australia",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 5
  },
  {
    id: "AU.QL",
    state: "Queensland",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  },
  {
    id: "AU.NS",
    state: "North South Wales",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 3
  },
  {
    id: "AU.VI",
    state: "Victoria",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 2
  },
  {
    id: "AU.TS",
    state: "Tasmania",
    domain: [ "R", "G", "B", "Y" ],
    color: null,
    count: 0
  }
];

var australia_dataSet = [
  {
    id: "AU.WA",
    fill: null
  },
  {
    id: "AU.NT",
    fill: null
  },
  {
    id: "AU.SA",
    fill: null
  },
  {
    id: "AU.QL",
    fill: null
  },
  {
    id: "AU.NS",
    fill: null
  },
  {
    id: "AU.VI",
    fill: null
  },
  {
    id: "AU.TS",
    fill: null
  }
];

var australia_color_domain = [ "R", "G", "B", "Y" ];

//FUNCTIONS

//Selects the country of whose map has to be colored
function selectCountry ( countryName )
{
  currentCountrySelected = countryName;
  initializeVariables();
  resetMapView();
  initializeMap();
}

//Initializes all class level variables
function initializeVariables ()
{
  if ( currentCountrySelected == "India" )
  {
    countryConstraintGraph = india_constraint_graph;
    countryConstraintCount = india_constraint_count;
    mapcolours = india_color_domain;
    dataSet = india_dataSet;
    edges = countryConstraintGraph.length;
    for ( let i = 0; i < edges; i++ )
    {
      stack.push( [] );
    }
  } else if ( currentCountrySelected == "Australia" )
  {
    countryConstraintGraph = australian_constraint_graph;
    countryConstraintCount = australian_constraint_count;
    mapcolours = australia_color_domain;
    dataSet = australia_dataSet;
    edges = countryConstraintGraph.length;
    for ( let i = 0; i < edges; i++ )
    {
      stack.push( [] );
    }
  } else
  {
    console.log( "Country selection not proper" );
  }
}

//Initializes and displays map on the screen
function initializeMap ()
{
  let map = anychart.map();
  if ( currentCountrySelected == "India" )
  {
    // var logo = document.getElementById( "chart" );
    // map.geoData(logo)
    map.geoData( anychart.maps.india );

  } else
  {
    map.geoData( anychart.maps.australia );
  }
  map.scale().gap( 0.15 );
  map.interactivity( false );
  var series = map.choropleth( dataSet );
  series.labels( true );
  series.tooltip( true );
  map.container( "container" );
  map.draw();
}


//Function to check whether the assigned color is not clashing with the color to be assigned to its neighbouring state
function isConsistentMap ( v, graph, color, c )
{
  for ( var i = 0; i < edges; i++ )
  {
    if ( graph[ v ][ i ] == 1 && c == color[ i ] ) return false;
  }
  return true;
}

//A common function which uses DFS with Forward checking algorithm (With and Without Heuristics)
function forwardCheckingAlgo ( graph, m, color, v )
{
  if ( v == edges ) return true;

  if ( countryConstraintCount[ v ].domain.length === 0 )
  {
    v--;
    var colorToRestore = countryConstraintCount[ v ].color;
    for ( var i = 0; i < edges; i++ )
    {
      if ( graph[ v ][ i ] == 1 )
      {
        stack[ i ] = stack[ i ].filter( e => e != colorToRestore );
        if ( !countryConstraintCount[ i ].domain.includes( colorToRestore ) )
        {
          if ( colorToRestore == "R" )
          {
            countryConstraintCount[ i ].domain.splice( 2, 0, colorToRestore );
          } else if ( colorToRestore == "G" )
          {
            countryConstraintCount[ i ].domain.splice( 1, 0, colorToRestore );
          } else if ( colorToRestore == "B" )
          {
            countryConstraintCount[ i ].domain.splice( 2, 0, colorToRestore );
          } else if ( colorToRestore == "Y" )
          {
            countryConstraintCount[ i ].domain.splice( 3, 0, colorToRestore );
          }

        }
      }
    }

  } else
  {
    for ( var c = 0; c < mapcolours.length; c++ )
    {
      if ( isConsistentMap( v, graph, color, countryConstraintCount[ v ].domain[ c ] ) )
      {
        color[ v ] = countryConstraintCount[ v ].domain[ c ];
        var colorAssigned = countryConstraintCount[ v ].domain[ c ];
        if ( countryConstraintCount[ v ].color != null )
        {
          var colorToRestore = countryConstraintCount[ v ].color;
          for ( var i = 0; i < edges; i++ )
          {
            if ( graph[ v ][ i ] == 1 )
            {
              stack[ i ] = stack[ i ].filter( e => e != colorAssigned );
              if ( colorToRestore == "R" )
              {
                countryConstraintCount[ i ].domain.splice( 2, 0, colorToRestore );
              } else if ( colorToRestore == "G" )
              {
                countryConstraintCount[ i ].domain.splice( 1, 0, colorToRestore );
              } else if ( colorToRestore == "B" )
              {
                countryConstraintCount[ i ].domain.splice( 2, 0, colorToRestore );
              } else if ( colorToRestore == "Y" )
              {
                countryConstraintCount[ i ].domain.splice( 3, 0, colorToRestore );
              }
            }
          }
        }
        countryConstraintCount[ v ].color = colorAssigned;

        for ( var i = 0; i < edges; i++ )
        {
          if ( graph[ v ][ i ] == 1 )
          {
            countryConstraintCount[ i ].domain = countryConstraintCount[
              i
            ].domain.filter( e => e !== colorAssigned );
            if ( !stack[ i ].includes( colorAssigned ) ) stack[ i ].push( colorAssigned );
          }
        }

        if ( forwardCheckingAlgo( graph, m, color, v + 1 ) ) return true;
      }
      color[ v ] = null;
    }
  }
  return false;
}

var color = [ edges ];
for ( var i = 0; i < edges; i++ )
{
  color[ i ] = null;
}

function printSolution ( color )
{
  for ( var i = 0; i < edges; i++ )
  {
    switch ( color[ i ] )
    {
      case "R":
        color[ i ] = "RED";
        break;
      case "G":
        color[ i ] = "GREEN";
        break;
      case "B":
        color[ i ] = "BLUE";
        break;
      case "Y":
        color[ i ] = "YELLOW";
        break;

    }
    countryConstraintCount[ i ].color = color[ i ]; //
  }
  console.log( "Solution Exists: Following" + " are the assigned colors" );
  // for (var i = 0; i < edges; i++) console.log(" " + color[i] + " ");

  console.log( "Solution", countryConstraintCount );
}

function graphColoringCall ( choice )
{
  //debugger
  switch ( choice )
  {
    case "forward-checking-with-heuristics":
      if ( currentCountrySelected )
      {
        $( "#depth" ).attr( "disabled", "disabled" );
        $( "#depthHeur" ).attr( "disabled", "disabled" );
        $( "#forward" ).attr( "disabled", "disabled" );
        isAlgorithmSelected = true;
        isHeuristicsUsed = true;
        var t0 = performance.now();
        for ( var i = 0; i < countryConstraintCount.length; i++ )
        {
          dataSet[ i ].fill = null;
        }
        forwardCheckingAlgo( countryConstraintGraph, mapcolours.length, color, 0 );

        printSolution( color );
        var map = anychart.map();
        dataSet[ 0 ].fill = countryConstraintCount[ 0 ].color;
        currentState = 0;
        map.scale().gap( 0.15 );
        map.interactivity( false );

        if ( currentCountrySelected == "Australia" )
        {
          map.geoData( anychart.maps.australia );
        } else
        {

          map.geoData( anychart.maps.india );
        }
        var series = map.choropleth( dataSet );
        series.labels( true );
        series.tooltip( true );
        var mapContainer = document.getElementById( "container" );
        mapContainer.innerHTML = "";
        mapContainer.innerHTML += "Forward Checking With Heuristics";
        mapContainer.style.fontWeight = "bold";
        map.container( "container" );
        map.draw();
        var t1 = performance.now();
        var outputTime = document.getElementById( "outputTime" );
        outputTime.innerHTML += "Time Taken :" + ( t1 - t0 ) + " milliseconds";
        console.log(
          "Time Taken" + ( t1 - t0 ) + " milliseconds."
        );
        return true;
      } else
      {
        alert( "Please select a country to proceed" );
        return false;
      }
    case "next-state":
      if ( isAlgorithmSelected )
      {
        var map = anychart.map();
        currentState++;
        if ( currentState == countryConstraintCount.length )
        {
          alert( "All the state are shown" );
          var mapContainer = document.getElementById( "container" );
          mapContainer.innerHTML = "";
          window.location.reload();
          return true;
        }
        dataSet[ currentState ].fill = countryConstraintCount[ currentState ].color;
        map.scale().gap( 0.15 );
        map.interactivity( false );
        var logo = document.getElementById( "chart" );
        if ( currentCountrySelected == "Australia" )
        {
          map.geoData( anychart.maps.australia );
        } else
        {
          map.geoData( anychart.maps.india );
        }
        var series = map.choropleth( dataSet );
        series.labels( true );
        series.tooltip( true );
        var mapContainer = document.getElementById( "container" );
        mapContainer.innerHTML = "";
        mapContainer.style.fontWeight = "bold";
        map.container( "container" );
        map.draw();
        return true;
      } else
      {
        alert( "Please choose an algorithm" );
        return false;
      }
  }
}

//resets The map view
function resetMapView ()
{
  var mapContainer = document.getElementById( "container" );
  mapContainer.innerHTML = "";
}

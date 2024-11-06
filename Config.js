var Config = {};

//base:
Config.debug = false;
Config.framerate = 20;
Config.backgroundColor = '#000';

//piece:
Config.maxtilt = 2;
//
Config.starspeed = 12;
//tril amplitude (max, afhankelijk van snelheid) en amplitude horizontaal
Config.ampl = .3;
Config.amplHor = 1;
//1 op tril_hor_freq keer ook horizontaal trillen
Config.tril_hor_freq = 8;
//accelerationstep geeft aan hoe snel de auto versnelt
Config.accelerationstep = .05;
//speed_back_to_middle geeft aan hoe snel er terug naar het midden gestuurd wordt bij niet sturen
Config.speed_back_to_middle = .8;
//backward_driving (0 of 1) geeft aan of er achteruit gereden kan worden
Config.backward_driving = 1;

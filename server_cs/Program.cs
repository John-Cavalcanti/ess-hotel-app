using server_cs.src.controllers;
using server_cs.src.models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// getting the models and controllers
AtracoesController atr = new();
DiscountController dis = new();

// Configuring endpoints

// Standard endpoint
app.MapGet("/", () => "Accomodare Hotel API is Working!");

// Endpoint for atracoes
var atracoesRoute = app.MapGroup("/atracoes");
atracoesRoute.MapGet("/", () => 
{
    return atr.GetAllAtracoes();
});

atracoesRoute.MapGet("/{id}", (string id) => {

    Atracao atracao = atr.GetAtracaoById(id);
    Console.WriteLine(id, ' ',atracao);
    return atracao;
});

// Endpoint for discounts
var discountsRoute = app.MapGroup("/discounts");
discountsRoute.MapGet("/", () => {
    return dis.GetAllDiscounts();
});

discountsRoute.MapGet("/{id}", (string id) =>{
    return dis.GetPriceById(id);
});


app.Run();

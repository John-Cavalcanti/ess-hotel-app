using server_cs.src.controllers;
using server_cs.src.models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// getting the models
AtracoesController atr = new();

// configuring endpoints
app.MapGet("/", () => "Hello World!");

// Endpoint atracoes
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

app.Run();

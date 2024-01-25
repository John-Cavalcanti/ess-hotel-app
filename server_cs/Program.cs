using Microsoft.AspNetCore.Mvc;
using server_csharp.src.models;
using System.Text.Json;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Accomodare hotel API with .NET is working");

var atracoes = app.MapGet("/atracoes", async context =>
{
    var atracoesController = context.RequestServices.GetRequiredService<AtracoesController>();
    var atracoesResult = atracoesController.GetAllAtracoes();

    // Serialize the result to JSON
    var responseJson = JsonSerializer.Serialize(atracoesResult);

    // Set the response content type and write the JSON to the response body
    context.Response.ContentType = "application/json";
    await context.Response.WriteAsync(responseJson);
});

app.Run();


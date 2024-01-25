using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

public class Startup(IConfiguration configuration)
{
    public IConfiguration Configuration { get; } = configuration;

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();

            endpoints.MapGet("/", async context =>
            {
                await context.Response.WriteAsync("Accomodare hotel API is working!");
            });

            endpoints.MapGet("/atracoes", async context =>
            {
                var atracoesController = context.RequestServices.GetRequiredService<AtracoesController>();
                var atracoesResult = atracoesController.GetAllAtracoes();

                // Serialize the result to JSON
                var responseJson = JsonSerializer.Serialize(atracoesResult);

                // Set the response content type
                context.Response.ContentType = "application/json";

                // Write the JSON directly to the response stream
                await context.Response.Body.WriteAsync(Encoding.UTF8.GetBytes(responseJson));
            });
        });
    }
}

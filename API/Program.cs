using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

#region CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyHeader()
                          .AllowAnyMethod()
                          // .AllowCredentials()
                          .AllowAnyOrigin();
                          // .WithOrigins("http://localhost:3000");
                          //   policy.WithOrigins("http://example.com",
                          //                       "http://www.contoso.com");
                      });
});
#endregion

var app = builder.Build();

#region  //สร้างข้อมูลจำลอง Fake data
using var scope = app.Services.CreateScope(); //using หลังทำงานเสร็จจะถูกทำลายจากMemory
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    await context.Database.MigrateAsync();   //สร้าง DB ให้อัตโนมัติถ้ายังไม่มี
    DbInitializer.Initialize(context); //สร้างข้อมูลสินค้าจำลอง
}
catch (Exception ex)
{
    logger.LogError(ex, "Problem migrating data");
}
#endregion


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();  Web


#region ส่ง error ไปให้ Axios ตอนทำ Interceptor
  app.UseMiddleware<ExceptionMiddleware>(); 
#endregion


app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

await app.RunAsync();

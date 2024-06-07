using System.Net;

namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        Timer timer;
        HttpClient client;
        public async void aa(object? state)
        {   
            try
            {
#if ANDROID
                HttpResponseMessage mes = await client.SendAsync(new HttpRequestMessage(HttpMethod.Get, "http://10.0.2.2:3001/CheckClick"));
#endif
#if WINDOWS
             HttpResponseMessage mes = await client.SendAsync(new HttpRequestMessage(HttpMethod.Get, "http://127.0.0.1:3001/CheckClick"));
#endif




                string output = await mes.Content.ReadAsStringAsync();
                MainThread.BeginInvokeOnMainThread(() =>
                {
                    Titleee.Text = output;
                });
                
            }
            catch (HttpRequestException ex)
            {
                DisplayAlert("ERROR", ex.Message, "OK");
            }
           
        }

        public MainPage()
        {
            InitializeComponent();
            timer = new Timer(aa, null, 100, 1000);
#if ANDROID 
            client = new HttpClient(new SocketsHttpHandler());
#endif
#if WINDOWS
            client = new HttpClient(new SocketsHttpHandler());
#endif
        }




        public void CheckClicks()
        {
            try
            {
#if ANDROID
                WebRequest request = WebRequest.Create("http://10.0.2.2:3001/ADDClick");
#endif
#if WINDOWS
            WebRequest request = WebRequest.Create("http://127.0.0.1:3001/ADDClick");
#endif

                request.Method = "GET";
                request.GetResponse();
            }
            catch (WebException ex)
            {
                 DisplayAlert("ERROR", ex.Message, "s");
            }
        }
        private void Button_Clicked(object sender, EventArgs e)
        {

            Task.Run(() => { CheckClicks(); });
        }
    }

}

function Test()
{
  Log.Enabled = false;
  Log.Error("process crashed")
  Log.Enabled = true; 
}

//@edge 
function EventControl1_OnLogError(Sender, LogParams)
{
  if (equal(LogParams.MessageText, "process crashed"))
  {
    
  }
  else
  {
    // If another error occurs,
    // Stop the current test item.
    Runner.Stop(true);
  }
}
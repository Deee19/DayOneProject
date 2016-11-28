module.exports = {
  dataTypes:function(data)
  {
    if (typeof data == 'string')
    {
      return data.length;
    }
    else if (typeof data == 'boolean')
    {
      return data;
    }
    else if (!data)
    {
      return 'no value';
    }
    else if (typeof data == 'number')
    {
      if (data < 100)
      {
        return 'less than 100';
      }
      else if (data > 100)
      {
        return 'more than 100';
      }
      else if (data == 100)
      {
        return 'equal to 100';
      }
    }
    else if (Array.isArray(data))
    {
      return data[2];
    }
    else (typeof data == 'function')
    {
      return data(true);
    }
  }
}

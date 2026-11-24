

exports.handler = async function(event) {

  if (event.httpMethod !== 'POST') {

    return { statusCode: 405, body: 'Method Not Allowed' };

  }



  try {

    const { text, chatId } = JSON.parse(event.body);

    const token = '9297679566:AAFwhn7hXv3Yaad3goiZc3LkDBVudUzKzlk';

    const targetChat = chatId || '1443237055';



    const response = await fetch(`https://telegram.org{token}/sendMessage`, {

      method: 'POST',

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({ chat_id: targetChat, text: text })

    });



    const data = await response.json();

    return { statusCode: 200, body: JSON.stringify(data) };

  } catch (error) {

    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };

  }

};


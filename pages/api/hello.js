import fs from "fs";

export default async (req, res) => {
  if (req.method === "POST") {
    const contactsData = req.body;

    fs.writeFile(
      "contacts.json",
      JSON.stringify(contactsData, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Contacts saved to file");
      }
    );

    res.status(201).json(`Data written to file`);
  } else if (req.method === "GET") {
    res.setHeader("Content-Type", "application/json");

    try {
      if (fs.existsSync("./contacts.json")) {
        const data = fs.readFileSync("contacts.json", "utf8");
        const contactsData = JSON.parse(data);
        res.status(200).json({ listData: contactsData });
      } else {
        res.status(200).json({ listData: null });
      }
    } catch (err) {
      console.error(err);
    }
  }
};

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        const editionDrop = await sdk.getContract(
            "0x6344E97926EAF8CEDeC054E93589F27352933c62",
            "edition-drop"
        );
        await editionDrop.createBatch([
            {
                name: "Eligibe Candidate",
                description:
                    "This NFT will give you access to FilterGirlfriend DAO",
                image: readFileSync("scripts/assets/eligible.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();

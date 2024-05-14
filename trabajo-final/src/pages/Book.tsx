import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import { DownloadIcon } from "@/components/DownloadIcon";

export const Book: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState<any>(null); // Tipo de libro por definir

  const urls = [
    "https://i.postimg.cc/htKsnyVT/691952.png",
    "https://i.postimg.cc/0jnQw0yM/Icon-epub-file-svg.png",
    "https://i.postimg.cc/gjCM38tp/mobi.png",
    "https://i.postimg.cc/28XW9CCq/rdf-xml.png",
    "https://i.postimg.cc/qgfTgt8h/jpeg.png",
    "https://i.postimg.cc/C1N7z9kj/4450798-200.png",
    "https://i.postimg.cc/BbbzsJk8/applicationoctetstream-103653.png",
  ];

  const onClose = () => {
    navigate("/catalog", {
      replace: true,
    });
  };

  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const response = await axios.get(
          `https://gutendex.com/books/${bookId}`
        );
        setBookInfo(response.data);
      } catch (error) {
        console.error("Error al obtener la información del libro:", error);
      }
    };

    fetchBookInfo();
  }, [bookId]);

  return (
    <Modal
      isOpen={true}
      onOpenChange={onOpenChange}
      onClose={onClose}
      size="4xl"
    >
      <ModalContent>
        {bookInfo && (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {bookInfo.title}
            </ModalHeader>
            <ModalBody className="flex flex-wrap flex-row gap-10 justify-center">
              <img
                src={bookInfo.formats["image/jpeg"]}
                alt={bookInfo.title}
                style={{ maxWidth: "186px", maxHeight: "270px" }}
              />
              <div className="max-w-1/4" style={{ maxWidth: "70%" }}>
                <p className="mb-5">
                  <span className="font-bold">Autor:</span>{" "}
                  {bookInfo.authors[0].name}
                </p>
                <p className="mb-5">
                  <span className="font-bold">Temas:</span>{" "}
                  {bookInfo.subjects.join(", ")}
                </p>
                <p className="mb-5">
                  <span className="font-bold">Librerías:</span>{" "}
                  {bookInfo.bookshelves.join(", ")}
                </p>
                <p className="mb-5">
                  <span className="font-bold">Idiomas:</span>{" "}
                  {bookInfo.languages.join(", ")}
                </p>
                <p className="mb-5">
                  <span className="font-bold">Número de descargas:</span>{" "}
                  {bookInfo.download_count}
                </p>{" "}
              </div>
              <p className="font-bold mr-2 text-left">Formatos:</p>
              <div className="flex flex-row items-center justify-center">
                <ul className="flex flex-wrap gap-2">
                  {Object.entries(bookInfo.formats).map(
                    ([format, url], index) => (
                      <li key={format}>
                        <DownloadIcon title={format} src={urls[index]} />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

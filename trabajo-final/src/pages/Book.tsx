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

export const Book: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState<any>(null); // Tipo de libro por definir

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
            <ModalBody className="flex flex-wrap flex-row gap-10">
              <img
                src={bookInfo.formats["image/jpeg"]}
                alt={bookInfo.title}
                style={{ maxWidth: "186px", maxHeight: "270px" }}
              />
              <div>
                <p>
                  <span className="font-bold">Autor:</span>{" "}
                  {bookInfo.authors[0].name}
                </p>
                <p>
                  <span className="font-bold">Temas:</span>{" "}
                  {bookInfo.subjects.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Librerías:</span>{" "}
                  {bookInfo.bookshelves.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Idiomas:</span>{" "}
                  {bookInfo.languages.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Número de descargas:</span>{" "}
                  {bookInfo.download_count}
                </p>{" "}
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

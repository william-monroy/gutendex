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
    <Modal isOpen={true} onOpenChange={onOpenChange} onClose={onClose}>
      <ModalContent>
        {bookInfo && (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {bookInfo.title}
            </ModalHeader>
            <ModalBody>
              <p>Autor: {bookInfo.authors[0].name}</p>
              <p>Temas: {bookInfo.subjects.join(", ")}</p>
              <p>Librerías: {bookInfo.bookshelves.join(", ")}</p>
              <p>Idiomas: {bookInfo.languages.join(", ")}</p>
              <p>Número de descargas: {bookInfo.download_count}</p>
              <img
                src={bookInfo.formats["image/jpeg"]}
                alt={bookInfo.title}
                style={{ maxWidth: "186px", maxHeight: "270px" }}
              />{" "}
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      @if (!profileSaved) {
        <div class="profile-setup">
          <h2>Profile Setup</h2>
          <div class="profile-form">
            <div class="form-group">
              <label for="displayName">Display Name:</label>
              <input 
                type="text" 
                id="displayName" 
                [(ngModel)]="displayName" 
                placeholder="Enter your display name"
              >
            </div>
            <div class="form-group">
              <label for="profileImage">Profile Image:</label>
              <input 
                type="file" 
                id="profileImage" 
                (change)="onImageSelected($event)"
                accept="image/*"
              >
            </div>
            <div class="image-preview" *ngIf="imagePreview">
              <img [src]="imagePreview" alt="Profile preview">
            </div>
            <button (click)="saveProfile()" [disabled]="!displayName || !imagePreview">
              Save Profile
            </button>
          </div>
        </div>
      } @else {
        <div class="profile-view">
          <div class="profile-image">
            <img [src]="imagePreview" alt="Profile picture">
          </div>
          <h2 class="profile-name">{{ displayName }}</h2>
        </div>
      }
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .image-preview {
      margin: 1rem 0;
    }
    .image-preview img {
      max-width: 200px;
      border-radius: 4px;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    button:hover:not(:disabled) {
      background-color: #1565c0;
    }
    .profile-view {
      text-align: center;
    }
    .profile-image {
      width: 200px;
      height: 200px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      overflow: hidden;
    }
    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .profile-name {
      margin: 0;
      color: #333;
      font-size: 1.5rem;
    }
  `]
})
export class ProfileComponent {
  displayName: string = '';
  imagePreview: string | null = null;
  selectedFile: File | null = null;
  profileSaved: boolean = false;

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    if (this.displayName && this.imagePreview) {
      this.profileSaved = true;
      // TODO: Implement save to database
      console.log('Profile saved:', {
        displayName: this.displayName,
        image: this.selectedFile
      });
    }
  }
}
